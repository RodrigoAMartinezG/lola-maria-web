# Lola Maria - AI Coding Agent Guidelines

## Project Overview
Next.js 14 (App Router) website for an Argentine bakery/restaurant. All UI text is in **Spanish**.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom theme (see `tailwind.config.ts`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Path alias**: `@/*` → `./` (root)

## Key Conventions

### Components
- All components are **client components** (`'use client'`) — no server components in this project
- Each component lives in `components/` as a single-file component (no subdirectories)
- Use `motion` from framer-motion with `whileInView` for scroll-triggered animations
- Use `viewport={{ once: true, margin: '-100px' }}` for animation triggers
- Define animation variants as constants at the top of the file
- Use Lucide React icons (not inline SVGs) unless a custom SVG is needed

### Styling
- Custom Tailwind colors: `cream`, `sand`, `terracotta`, `terracotta-dark`, `warm-brown`, `dark-brown`, `olive`, `sage`
- Custom fonts: `serif` (Georgia), `sans` (system-ui)
- Custom animations: `fade-in`, `slide-up`, `scale-in`
- Use `max-w-7xl mx-auto px-6 lg:px-8` for section containers
- Sections use `py-24 md:py-32` padding
- Decorative blur elements use `rounded-full blur-3xl` with low opacity colors

### Data Patterns
- Menu items, specialties, and static data are defined as **module-level constants** (arrays/objects) at the top of the file
- Use TypeScript interfaces for form state (e.g., `OrderForm`)
- Prices are strings with `$` prefix (ARS currency)

### Images
- Static images go in `public/images/`
- Reference via `/images/...` (no `public/` prefix in code)

### Layout
- `app/layout.tsx` wraps everything with `Navbar` and `Footer`
- `app/page.tsx` is the single page with sections in order: Hero → About → Specials → Menu → Contact
- Sections use `id` attributes matching nav links (`#inicio`, `#nosotros`, `#especialidades`, `#menu`, `#contacto`)

### State Management
- Use React `useState` and `useEffect` hooks
- For carousels/sliders: `setInterval` with cleanup in `useEffect`
- For forms: controlled inputs with interface-typed state

### Adding New Sections
1. Create component in `components/SectionName.tsx`
2. Add to `app/page.tsx` in the correct scroll order
3. Add nav link to `Navbar.tsx` navLinks array
4. Use Tailwind custom colors from `tailwind.config.ts`
5. Add Framer Motion animations with `whileInView`

### Adding Menu Items
- Edit the relevant category array in `components/Menu.tsx`
- Each item: `{ name, price, desc }`
- Follow existing naming conventions (Spanish names, descriptive descriptions)

## Build Commands
- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run lint` — ESLint check
