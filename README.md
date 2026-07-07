# CHUNKY PAIRS

A vibrant, fast-paced memory card game built with a distinct Neo-Brutalist design aesthetic, modular architecture, and dynamic gameplay flows.

Train your brain across multiple grid sizes, challenge a friend in local multiplayer mode, and switch between retro arcade and pastel punch theme profiles.

🔗 **Live Demo:** https://stefanstraeter.github.io/memory/

---

## Preview

![Chunky Pairs Preview](assets/img/chunky-pairs-preview.gif)

---

## Features

- **Dynamic Grid Sizes** – Play with 16, 24, or 36 cards depending on the desired difficulty.
- **Local Multiplayer** – Competitive 2-player turn-based mode with live score tracking.
- **Neo-Brutalist Themes** – Instant toggle between "Retro Arcade" and "Pastel Punch" via real-time CSS variables.
- **Intense Turn Timer** – A countdown widget that puts pressure on players to find pairs quickly.
- **True Mobile-First UX** – Complete UI reshuffling via CSS Flexbox/Grid and touch-friendly tap targets.
- **Tactile Interaction Design** – Satisfying 3D-press effects on buttons and cards with anti-clamping scroll/zoom containment.
- **Polished Animations** – Smooth 3D card flips, brutalist spring effects, and bouncy end-screen interactions.

---

## Purpose

This project was developed as part of a frontend training program at the Developer Akademie.

It demonstrates how to build an interactive, high-performance web game from scratch using modular architecture, modern SCSS layouts, and dynamic theme tokens.

Focus areas include:

- Mobile-First responsive shifting (re-ordering layouts across device breakpoints)
- Advanced CSS Grid structures for fluid, aspect-ratio locked layouts
- Token-based design systems using native CSS variables inside SASS structures
- Clean state-driven DOM updates for game logic and timing events

---

## Tech Stack

- **HTML5** (semantic markup for game views)
- **SCSS / CSS3** (Modular 7-1 architecture, Flexbox, Grid, and Theme Tokens)
- **TypeScript / JavaScript** (State-driven gameplay engine & view management)
- **Vite** (Next-generation frontend tooling and production bundling)

---

## Project Structure

```text
src/
  abstracts/
    _variables.scss
    _mixins.scss
  components/
    _buttons.scss
    _cards.scss
    _modal.scss
  features/
    _setup.scss
    _game.scss
    _results.scss
  templates/
    game.template.ts
```

---

## Getting Started

Clone the repository:
git clone [https://github.com/stefanstraeter/chunky-pairs.git](https://github.com/stefanstraeter/chunky-pairs.git)
cd chunky-pairs

Install dependencies and start the development server:
npm install
npm run dev

Open http://localhost:5173/memory/ in your browser.

---

## Author

Stefan Sträter
GitHub: https://github.com/stefanstraeter/
