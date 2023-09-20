import i18n from 'astro-i18n';
import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(), purgecss(), sitemap()],
  site: 'https://www.alexandersandholdt.dk',
  redirects: {
    '/da': '/',
  },
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
