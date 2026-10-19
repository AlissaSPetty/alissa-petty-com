# Alissa Petty — portfolio (React)

Simple single-page portfolio rebuilt from a saved HTML export, using **Vite + React + TypeScript** and **react-router-dom** for `/privacy` and `/legal-notice`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Images / `public/assets`

The original export referenced images under `https://alissapetty.com/images/...`. Those URLs currently return **404**, and the live homepage is a minimal shell, so this repo ships **SVG placeholders** in `public/assets/`.

To use your real photos and logos, drop files into `public/assets/` and update paths in `src/pages/Home.tsx` (or keep the same filenames to replace in place).

## Deployment

Hosted on **Cloudflare Workers** (static assets), configured in `wrangler.jsonc`. Workers Builds is connected to the GitHub repo, so pushes to `main` build and deploy automatically.

To deploy manually:

```bash
npx wrangler login
npm run deploy
```

Client-side routes (`/privacy`, `/legal-notice`) are handled by `not_found_handling: "single-page-application"`, which serves `index.html` for unknown paths.
