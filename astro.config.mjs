// @ts-check
import { defineConfig } from 'astro/config';

// Zurvan Linux landing page. Persian-first, English secondary.
// Static output, zero client JS. Deployed to GitHub Pages at zurvanlinux.org.
export default defineConfig({
  site: 'https://zurvanlinux.org',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
    routing: {
      // fa served at "/", en served at "/en/"
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Emit trailing slashes so "/en" -> "/en/" (cleaner for a static Pages site).
    format: 'directory',
  },
});
