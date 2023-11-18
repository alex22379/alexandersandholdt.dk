import { markdown } from '@astropub/md';

// from https://stackoverflow.com/questions/33005575/how-to-convert-json-object-structure-to-dot-notation
function dotNotate(obj, target = {}, prefix = '') {
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      dotNotate(obj[key], target, prefix + key + '.');
    } else {
      return (target[prefix + key] = obj[key]);
    }
  });

  return target;
}

async function getLocales() {
  const locales = {};

  const files = import.meta.glob('../../data/locales/*.json', { as: 'raw' });

  for (const path in files) {
    const mod = await files[path]();
    const data = dotNotate(JSON.parse(mod));
    const localeCode = path.split(/[/]+/).pop().replace('.json', '');
    locales[localeCode] = data;
  }

  return locales;
}
export const locales = await getLocales();

function getLanguages(locales) {
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

export function useTranslations(lang) {
  return function t(key) {
    const md =
      locales[lang][key] ||
      locales[defaultLang][key] ||
      `Kunne ikke finde ui-string: *${key}*`; // markdown source
    const html = markdown.inline(md);
    return html;
  };
}

export function useTranslatedPath(lang) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
