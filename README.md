# 📚 Forgotten Worlds — Rare & Vintage Books

> *"Every old book holds a forgotten world."*

A jaw-dropping, fully functional **3D animated e-commerce website** for buying and selling rare, vintage, and second-hand books. Built as a zero-dependency static site — deployable anywhere in seconds.

---

## ✨ Features

### 🎨 Visual & Animation
- Custom golden cursor with trailing ring parallax effect
- 120 floating ambient gold & cream canvas particles
- 5 rotating 3D floating books in the hero with mouse parallax depth
- Cinematic light rays emanating from books
- Smooth scroll-reveal animations on every section
- Floating bookmark navigation sidebar
- Glassmorphism + neumorphism UI cards
- Animated stat counters on load

### 🛒 Full E-Commerce Functionality
- **Buy** — Add any book to cart, view cart sidebar, see running total, checkout
- **Sell** — Full listing form: title, author, year, genre, condition, price, description, image upload preview — submitted books appear instantly in the carousel
- **AI Discovery Engine** — Type any mood or genre, get tailored book recommendations
- **Search** — Hit Enter to search by title, author, or genre
- **Filter by Category** — Click any genre card to filter
- **Sign In / Register** — Modal with tabbed authentication UI

### 📖 Sections
1. **Hero** — Cinematic 3D animated section with floating books & live stat counters
2. **Featured Rare Books** — Scrollable carousel with 3D book covers
3. **Category Grid** — 8 genre cards with 3D tilt hover effects
4. **Book of the Week** — Spotlight section with animated book & details
5. **Sell Your Books** — Full listing form with image upload
6. **Testimonials** — Vintage paper-textured review cards
7. **Book History Timeline** — Interactive historical timeline
8. **AI Recommendation Engine** — Mood-based book discovery
9. **Hidden Gems** — Curated rare finds grid

### 🎭 Easter Egg
Click the `📜` scroll icon in the bottom-left **3 times** to unlock a secret discount code!

---

## 🚀 Quick Deploy

### ⚡ Option 1 — Netlify Drop (60 seconds, no account needed)
1. Download or clone this repo
2. Go to **[netlify.com/drop](https://app.netlify.com/drop)**
3. Drag the entire project folder onto the page
4. 🎉 Live URL instantly — e.g. `https://forgotten-worlds.netlify.app`

### 🔧 Option 2 — Vercel (Recommended for production)
```bash
npm install -g vercel
vercel
# Follow prompts → live in 30 seconds
```

### 🐙 Option 3 — GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit — Forgotten Worlds"
git remote add origin https://github.com/YOUR_USERNAME/forgotten-worlds.git
git push -u origin main
```
Then go to **Settings → Pages → Deploy from `main` branch → `/public` folder**

### 🏠 Option 4 — Local Development
```bash
npm install
npm start
# Opens at http://localhost:3000
```

---

## 📁 Project Structure

```
forgotten-worlds/
├── public/
│   └── index.html          # ← Entire website (self-contained, 80KB)
├── src/
│   └── main.js             # ← JS logic, data, classes (for future expansion)
├── package.json            # Node scripts & dependencies
├── package-lock.json       # Locked dependency versions
├── tsconfig.json           # TypeScript config (future migration ready)
├── netlify.toml            # Netlify deployment config
├── vercel.json             # Vercel routing config
├── _redirects              # Netlify SPA redirect rules
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#c9a84c` | Primary accent, prices, highlights |
| `--gold-light` | `#e8c97a` | Hover states |
| `--brown-deep` | `#1a0e05` | Main background |
| `--brown-mid` | `#2d1a0a` | Card backgrounds |
| `--cream` | `#f0e6d0` | Primary text |
| `--emerald` | `#0d3d2e` | Section accents |
| `--amber` | `#e8960a` | CTA buttons |

### Typography
- **Headings**: `Playfair Display` — Elegant serif for vintage feel
- **Body/UI**: `Josefin Sans` — Clean futuristic sans-serif
- **Quotes/Descriptions**: `Cormorant Garamond` — Italic for cinematic feel

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES2020) |
| Fonts | Google Fonts |
| Particles | HTML5 Canvas API |
| 3D Effects | CSS `transform-style: preserve-3d` |
| Hosting | Any static host (Netlify / Vercel / GitHub Pages) |

> **Zero dependencies** — No React, no Vue, no build step. Pure HTML/CSS/JS.

---

## 📦 Scripts

```bash
npm start        # Serve locally on port 3000
npm run dev      # Dev server on port 3000
npm run preview  # Preview on port 4000
```

---

## 🌐 Deployment Configs

### Netlify (`netlify.toml`)
```toml
[build]
  publish = "public"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### Vercel (`vercel.json`)
```json
{
  "version": 2,
  "builds": [{ "src": "public/index.html", "use": "@vercel/static" }],
  "routes": [{ "src": "/(.*)", "dest": "/public/index.html" }]
}
```

---

## 📄 License

MIT © 2025 Forgotten Worlds

---

*Built with ✦ and a love for forgotten stories.*
