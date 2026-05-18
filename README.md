# Three.js Portfolio

A modern 3D portfolio built with React, Vite, and Three.js. It features a 3D hero scene, interactive project showcase, and a contact form powered by EmailJS.

## Features
- 3D hero scene with animated room and floating tech logos
- Project carousel with video textures on a 3D computer model
- Work experience section with animated character
- Contact form with EmailJS and SweetAlert2 feedback
- Responsive layout with Tailwind CSS

## Tech Stack
- React + Vite
- Three.js with @react-three/fiber and @react-three/drei
- Tailwind CSS (via @tailwindcss/vite)
- GSAP for animation
- react-globe.gl for the About section globe
- EmailJS + SweetAlert2 for contact form UX
- Font Awesome for UI icons

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

## Project Structure
```
public/           Static assets, models, textures, and icons
src/              App source
src/components/   Reusable UI and 3D components
src/sections/     Page sections (Hero, About, Experience, Projects, Contact, Footer, Navbar)
src/constants/    Data for nav links, projects, and work experience
```

## Customization
- Update content and media in `src/constants/index.js` (nav, projects, experience)
- Swap models and textures under `public/models` and `public/textures`
- Edit section copy in `src/sections/*`
- Update EmailJS IDs in `src/sections/Contact.jsx`

## Scripts
- `npm run dev` Start the Vite dev server
- `npm run lint` Lint the codebase

## Credits
- 3D assets, textures, and icons are located under `public/`
- Add source attributions as needed
- Add a live demo link here if available

## License
This project is for personal portfolio use.