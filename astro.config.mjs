import i18n from 'astro-i18n';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [i18n()],
  site: 'https://www.alexandersandholdt.dk/',
  redirects: {
    '/da': '/',
  },
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
