import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    icon(),
    purgecss({
      extractors: [
        {
          extractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
          extensions: ['astro', 'md', 'mdx', 'scss', 'html'],
        },
      ],
    }),
    sitemap({
      filter: (page) => page !== 'https://alexandersandholdt.dk/lorem' && page !== 'https://alexandersandholdt.dk/ønskeliste',
    }),
  ],
  site: 'https://alexandersandholdt.dk',
  trailingSlash: 'never',
  build: {
    format: 'preserve',
  },
});
