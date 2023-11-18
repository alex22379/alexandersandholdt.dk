import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alexandersandholdt.dk',
  integrations: [
    purgecss({
      content: [process.cwd() + '/src/**/*.{astro,html}'],
      defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
    }),
    sitemap({
      i18n: {
        defaultLocale: 'da',
        locales: {
          da: 'da',
          en: 'en',
        },
      },
    }),
    mdx(),
  ],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
