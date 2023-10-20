import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), sitemap()],
  site: 'https://www.alexandersandholdt.dk',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
