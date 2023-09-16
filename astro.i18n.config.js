import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  defaultLangCode: 'da',
  supportedLangCodes: ['en'],
  showDefaultLangCode: false,
  trailingSlash: 'always',
  translations: { da: 'public/locales/da.json', en: 'public/locales/en.json' },
  routeTranslations: {},
});
