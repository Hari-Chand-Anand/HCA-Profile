# HCA QR Management System Landing Page

A premium Apple-inspired landing page built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Included

- App Router structure
- Apple-style minimalist UI
- Responsive glassmorphism brand cards
- Inline SVG social platform icons
- Smooth hover states and entrance animations
- Ready for Vercel deployment

## Project Structure

```bash
app/
  globals.css
  layout.tsx
  page.tsx
components/
  BrandCard.tsx
  SocialLink.tsx
data/
  brands.ts
public/
  favicon.ico
next.config.js
next-env.d.ts
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
README.md
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deploy

1. Upload this project to a Git repository.
2. Import the repository into Vercel.
3. Framework preset will be detected as **Next.js** automatically.
4. Deploy with default settings.

## Notes

- External links use `<a>` tags and open in a new tab.
- The Dukejia LinkedIn link is left as `#` because the source prompt provided it as a placeholder.
- You can update brand links from `data/brands.ts` anytime.

## Brand Data

Edit this file to change brands, taglines, or social URLs:

```bash
data/brands.ts
```
