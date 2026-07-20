# website

Official **Zurvan Linux** landing page — Persian-first with an English toggle.
Built with [Astro](https://astro.build) (static output, zero client JS by
default), deployed to GitHub Pages at **`https://zurvanlinux.org`**.

## Stack

- Astro 5, TypeScript (strict), no UI framework.
- [`@fontsource/vazirmatn`](https://www.npmjs.com/package/@fontsource/vazirmatn) — Vazirmatn bundled at build time (no external font requests; important for users on restricted networks).
- Dark-slate + teal identity, RTL via logical CSS properties + `<html dir>`.

## Internationalization

- `fa` (Persian) is the default locale, served at `/`.
- `en` (English) is served at `/en/`.
- Strings live in `src/i18n/ui.ts`; the repo map in `src/data/repos.ts`.
- The `<html>` element is `dir="rtl" lang="fa"` on the Persian page and `dir="ltr" lang="en"` on the English page, so the whole layout mirrors.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # preview the production build
```

## Deploy

Push to `main` (touching `src/`, `public/`, or the build config) triggers
`.github/workflows/deploy-site.yml`, which builds and deploys `dist/` to
GitHub Pages via the Actions deployment (`build_type: workflow`). The
`public/CNAME` pins the custom domain `zurvanlinux.org`.

## Notes

- Pages HTTPS enforcement is a P0 prerequisite (Cloudflare domain verification); until then the site is reachable over HTTP.
- The Download section is a Phase 5 placeholder until the first stable ISO ships.
