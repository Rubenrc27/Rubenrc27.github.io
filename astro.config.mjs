// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rubenrc27.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'de', 'pt', 'ja', 'zh', 'ko'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
