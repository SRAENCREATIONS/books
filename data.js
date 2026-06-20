/**
 * Forgotten Worlds — Data Layer
 * All book, category, testimonial, and timeline data
 */

export const BOOKS = [
  { id: 1,  title: "Pride & Prejudice",         author: "Jane Austen",         year: 1813, price: 285,  condition: "Very Good", genre: "Classic Literature", color: "#3d1a0a", accent: "#c9a84c", rating: 5 },
  { id: 2,  title: "Crime & Punishment",         author: "F. Dostoevsky",       year: 1866, price: 195,  condition: "Good",       genre: "Classic Literature", color: "#0d2d1a", accent: "#4caf8a", rating: 5 },
  { id: 3,  title: "The Alchemist — 1st Ed.",    author: "Paulo Coelho",        year: 1988, price: 420,  condition: "Excellent",  genre: "Philosophy",         color: "#1a0e2d", accent: "#9b7ae8", rating: 5 },
  { id: 4,  title: "Frankenstein",               author: "Mary Shelley",        year: 1818, price: 3200, condition: "Excellent",  genre: "Classic Literature", color: "#1a0a0a", accent: "#e87070", rating: 5 },
  { id: 5,  title: "On the Origin of Species",   author: "Charles Darwin",      year: 1859, price: 8500, condition: "Very Good",  genre: "Science & Nature",   color: "#0a1a10", accent: "#4caf8a", rating: 5 },
  { id: 6,  title: "The Great Gatsby",           author: "F. Scott Fitzgerald", year: 1925, price: 650,  condition: "Good",       genre: "Classic Literature", color: "#1a1206", accent: "#e8c97a", rating: 4 },
  { id: 7,  title: "Dune — First Print",         author: "Frank Herbert",       year: 1965, price: 780,  condition: "Very Good",  genre: "Science Fiction",    color: "#1a1000", accent: "#e8960a", rating: 5 },
  { id: 8,  title: "Meditations",                author: "Marcus Aurelius",     year: 167,  price: 1200, condition: "Excellent",  genre: "Philosophy",         color: "#0a0a1a", accent: "#7a9be8", rating: 5 },
];

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

export const TESTIMONIALS = [
  {
    text: "I found a signed first edition of The Old Man and the Sea here. The seller was incredibly knowledgeable, and the book arrived wrapped like a treasure — because it is.",
    name: "Eleanor V.", location: "Oxford, UK", initial: "E",
  },
  {
    text: "The AI recommendation engine found me books I never knew I needed. It's like having a librarian who reads your soul. Utterly enchanting experience.",
    name: "Hiroshi T.", location: "Kyoto, Japan", initial: "H",
  },
  {
    text: "I sold three of my grandmother's vintage books here and they found readers who truly cherish them. The whole process was seamless and beautiful.",
    name: "Amara O.", location: "Lagos, Nigeria", initial: "A",
  },
  {
    text: "The interface is absolutely breathtaking. Browsing feels like walking through a real library. And the books? Exceptional quality and curation.",
    name: "Sofia D.", location: "Milan, Italy", initial: "S",
  },
];

export const TIMELINE = [
  { year: "3000 BC", event: "Ancient Egyptians create papyrus scrolls — the first portable writing surface." },
  { year: "105 AD",  event: "Cai Lun of China invents paper, revolutionizing the storage of knowledge." },
  { year: "1440",    event: "Gutenberg's printing press democratizes books, ending centuries of hand-copying." },
  { year: "1800s",   event: "The golden age of publishing — novels become the dominant cultural form." },
  { year: "1935",    event: "Penguin Books launches, making literature affordable to the masses." },
  { year: "2025",    event: "Forgotten Worlds launches — bridging the physical past and the digital present." },
];

export const GEMS = [
  { title: "A Room with a View",         author: "E.M. Forster",      year: 1908, price: 95  },
  { title: "The Sun Also Rises",         author: "Ernest Hemingway",  year: 1926, price: 340 },
  { title: "Siddhartha",                 author: "Hermann Hesse",     year: 1922, price: 120 },
  { title: "The Trial",                  author: "Franz Kafka",       year: 1925, price: 285 },
  { title: "Orlando",                    author: "Virginia Woolf",    year: 1928, price: 450 },
  { title: "Thus Spoke Zarathustra",     author: "Nietzsche",         year: 1883, price: 195 },
];

export const AI_SUGGESTIONS = [
  {
    keywords: ["gothic", "dark", "horror", "haunted", "vampire"],
    books: [
      { title: "The Castle of Otranto",      author: "Horace Walpole", year: 1764, price: 245 },
      { title: "Wuthering Heights",          author: "Emily Brontë",   year: 1847, price: 185 },
      { title: "The Picture of Dorian Gray", author: "Oscar Wilde",    year: 1890, price: 155 },
    ],
  },
  {
    keywords: ["adventure", "journey", "explore", "sea", "travel", "quest"],
    books: [
      { title: "Treasure Island",         author: "R.L. Stevenson", year: 1883, price: 195 },
      { title: "Twenty Thousand Leagues", author: "Jules Verne",    year: 1870, price: 245 },
      { title: "Robinson Crusoe",         author: "Daniel Defoe",   year: 1719, price: 380 },
    ],
  },
  {
    keywords: ["philosophy", "wisdom", "mind", "think", "soul", "meaning"],
    books: [
      { title: "Thus Spoke Zarathustra",  author: "Nietzsche", year: 1883, price: 195 },
      { title: "The Republic",            author: "Plato",     year: -375, price: 145 },
      { title: "Critique of Pure Reason", author: "Kant",      year: 1781, price: 285 },
    ],
  },
  {
    keywords: ["mystery", "detective", "crime", "thriller", "murder", "suspense"],
    books: [
      { title: "Hound of the Baskervilles",    author: "Arthur Conan Doyle", year: 1902, price: 320 },
      { title: "Murder on the Orient Express", author: "Agatha Christie",    year: 1934, price: 175 },
      { title: "The Woman in White",           author: "Wilkie Collins",     year: 1859, price: 260 },
    ],
  },
];
