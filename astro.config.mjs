import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), sitemap(), mdx()],
  site: 'https://www.alexandersandholdt.dk',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});