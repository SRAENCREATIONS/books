/**
 * Forgotten Worlds — Rare & Vintage Books
 * Main JavaScript Entry Point
 * 
 * This file serves as the logical entry point for the application.
 * All core functionality is embedded in public/index.html for
 * zero-dependency static deployment.
 * 
 * For future React/Vite migration, this file can be extended.
 */

// ─── BOOK DATA ────────────────────────────────────────────────────────────────
export const BOOKS = [
  { id: 1,  title: "Pride & Prejudice",        author: "Jane Austen",         year: 1813, price: 285,  condition: "Very Good", genre: "Classic Literature",  rating: 5 },
  { id: 2,  title: "Crime & Punishment",        author: "F. Dostoevsky",       year: 1866, price: 195,  condition: "Good",       genre: "Classic Literature",  rating: 5 },
  { id: 3,  title: "The Alchemist — 1st Ed.",   author: "Paulo Coelho",        year: 1988, price: 420,  condition: "Excellent",  genre: "Philosophy",          rating: 5 },
  { id: 4,  title: "Frankenstein",              author: "Mary Shelley",        year: 1818, price: 3200, condition: "Excellent",  genre: "Classic Literature",  rating: 5 },
  { id: 5,  title: "On the Origin of Species",  author: "Charles Darwin",      year: 1859, price: 8500, condition: "Very Good", genre: "Science & Nature",    rating: 5 },
  { id: 6,  title: "The Great Gatsby",          author: "F. Scott Fitzgerald", year: 1925, price: 650,  condition: "Good",       genre: "Classic Literature",  rating: 4 },
  { id: 7,  title: "Dune — First Print",        author: "Frank Herbert",       year: 1965, price: 780,  condition: "Very Good", genre: "Science Fiction",     rating: 5 },
  { id: 8,  title: "Meditations",               author: "Marcus Aurelius",     year: 167,  price: 1200, condition: "Excellent",  genre: "Philosophy",          rating: 5 },
];

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
export const CATEGORIES = [
  { icon: "📚", name: "Classic Literature",  count: 1247 },
  { icon: "🔭", name: "Science & Nature",    count: 892  },
  { icon: "🗺️", name: "History",             count: 654  },
  { icon: "🌙", name: "Mystery & Thriller",  count: 423  },
  { icon: "⚗️", name: "Science Fiction",     count: 567  },
  { icon: "🕊️", name: "Philosophy",          count: 334  },
  { icon: "🎨", name: "Art & Architecture",  count: 289  },
  { icon: "📜", name: "First Editions",      count: 156  },
];

// ─── CART MANAGEMENT ──────────────────────────────────────────────────────────
export class Cart {
  constructor() {
    this.items = [];
  }

  add(book) {
    const existing = this.items.find(i => i.id === book.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...book, qty: 1 });
    }
    return this;
  }

  remove(bookId) {
    this.items = this.items.filter(i => i.id !== bookId);
    return this;
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  get count() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  clear() {
    this.items = [];
    return this;
  }
}

// ─── LISTING VALIDATOR ────────────────────────────────────────────────────────
export function validateListing(data) {
  const required = ['title', 'author', 'price', 'email', 'genre', 'condition'];
  const missing = required.filter(field => !data[field] || String(data[field]).trim() === '');
  return {
    valid: missing.length === 0,
    missing,
  };
}

// ─── AI RECOMMENDATION ENGINE ────────────────────────────────────────────────
export const AI_SUGGESTIONS = [
  {
    keywords: ['gothic', 'dark', 'horror', 'haunted'],
    books: [
      { title: "The Castle of Otranto",   author: "Horace Walpole", year: 1764, price: 245 },
      { title: "Wuthering Heights",       author: "Emily Brontë",   year: 1847, price: 185 },
      { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, price: 155 },
    ],
  },
  {
    keywords: ['adventure', 'journey', 'explore', 'sea', 'travel'],
    books: [
      { title: "Treasure Island",         author: "R.L. Stevenson", year: 1883, price: 195 },
      { title: "Twenty Thousand Leagues", author: "Jules Verne",    year: 1870, price: 245 },
      { title: "Robinson Crusoe",         author: "Daniel Defoe",   year: 1719, price: 380 },
    ],
  },
  {
    keywords: ['philosophy', 'wisdom', 'mind', 'think', 'soul'],
    books: [
      { title: "Thus Spoke Zarathustra",  author: "Nietzsche",      year: 1883, price: 195 },
      { title: "The Republic",            author: "Plato",          year: -375, price: 145 },
      { title: "Critique of Pure Reason", author: "Kant",           year: 1781, price: 285 },
    ],
  },
  {
    keywords: ['mystery', 'detective', 'crime', 'thriller', 'murder'],
    books: [
      { title: "Hound of the Baskervilles", author: "Arthur Conan Doyle", year: 1902, price: 320 },
      { title: "Murder on the Orient Express", author: "Agatha Christie", year: 1934, price: 175 },
      { title: "The Woman in White",       author: "Wilkie Collins", year: 1859, price: 260 },
    ],
  },
];

export function getRecommendations(query) {
  const q = query.toLowerCase();
  const match = AI_SUGGESTIONS.find(s => s.keywords.some(k => q.includes(k)));
  return match ? match.books : AI_SUGGESTIONS[Math.floor(Math.random() * AI_SUGGESTIONS.length)].books;
}

// ─── PARTICLE SYSTEM ─────────────────────────────────────────────────────────
export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    for (let i = 0; i < 120; i++) this.particles.push(this.createParticle());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.1,
      life: Math.random(),
      maxLife: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.5 ? '#c9a84c' : '#f0e6d0',
    };
  }

  update() {
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.002;
      if (p.life <= 0 || p.y < 0) Object.assign(p, this.createParticle());
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.6;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      this.ctx.fill();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

console.log('%c✦ Forgotten Worlds Loaded ✦', 'color:#c9a84c;font-size:1.2rem;font-family:serif;');
