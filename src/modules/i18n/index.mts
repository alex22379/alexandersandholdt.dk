import { markdown } from '@astropub/md';
import path from 'node:path';
import dotNotateObj from '../../scripts/dotNotateObj';
import translate from '../../scripts/translate';

async function getLocales() {
  const locales = {};

  const files = import.meta.glob('../../data/locales/*.json', { as: 'raw' });

  for (const filePath in files) {
    const mod = await files[filePath]();
    const data = dotNotateObj(JSON.parse(mod));
    const localeCode = path.parse(filePath)['name'];
    locales[localeCode] = data;
  }

  return locales;
}
export const locales = await getLocales();

function getLanguages(locales: {}) {
  const languages = {};
  Object.keys(locales).forEach((l) => {
    languages[l] = useTranslations(l)('meta.language');
  });
  return languages;
}

export const languages = getLanguages(locales);

export const defaultLang = 'da';

export function getLangFromUrl(url: URL) {
  let [, lang] = url.pathname.split('/');
  lang = lang.toLowerCase();
  if (lang in locales) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string, autoTrans: boolean = false) {
    const md =
      locales[lang][key] ||
      locales[defaultLang][key] ||
      translate(
        autoTrans ? locales[defaultLang][key] : 'Fejl, fandt ikke ui-string',
        defaultLang,
        lang
      ); // markdown source
    const html = markdown.inline(md);
    return html;
  };
}

export function useTranslatedPath(lang) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
