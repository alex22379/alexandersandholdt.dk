export const languages = {
  da: 'Dansk',
  en: 'English',
};

const locales = {};

async function getLocale(lang: string) {
  if (!(lang in locales)) locales[lang] = await fetch(`/${lang}.json`);
  return locales[lang];
}

export const defaultLang = 'da';

export async function langString(path, lang = defaultLang) {
  const locale = getLocale(lang);
  return;
}
