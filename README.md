# Three.js Portfolio

A modern 3D portfolio built with React, Vite, and Three.js. It showcases interactive scenes, animated UI, and a curated set of projects in a fast, responsive web experience.

## Features
- Interactive 3D hero scene and animated elements
- Project showcase with video textures and spotlight highlights
- Responsive layout tuned for desktop, tablet, and mobile
- Tailwind CSS styling with reusable UI components
- Asset pipeline for models, textures, and icons

## Tech Stack
- React + Vite
- Three.js with @react-three/fiber and @react-three/drei
- Tailwind CSS
- GSAP for animation
- Leva for development controls

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm (or pnpm/yarn)

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
public/         Static assets, models, textures
src/            App source
src/components/ Reusable UI and 3D components
src/sections/   Page sections (Hero, Navbar, etc.)
src/constants/  Data for nav, projects, and content
```

## Scripts
- `npm run dev` Start the Vite dev server
- `npm run build` Build for production
- `npm run preview` Preview the production build
- `npm run lint` Lint the codebase

## Customization
- Update portfolio content in `src/constants/index.js`
- Swap models/textures in `public/models` and `public/textures`
- Adjust section layouts in `src/sections`

## Credits
- 3D assets and icons are located under `public/` (add sources if required)
- Add a live demo link here when available

## License
This project is for personal portfolio use. Add a license if you plan to share or distribute.
