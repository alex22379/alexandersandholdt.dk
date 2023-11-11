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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function getLocales(path) {
  const locales = {};
  const fileNames = fs
    .readdirSync(path)
    .filter((file) => file.match(/\.json$/));

  fileNames.forEach((fileName: string) => {
    locales[fileName.replace('.json', '')] = dotNotate(
      JSON.parse(fs.readFileSync(path + fileName, 'utf8').toString())
    );
  });
  return locales;
}
export const locales = getLocales(path.join(__dirname, '../../data/locales/'));

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
  const [, lang] = url.pathname.split('/');
  if (lang in locales) return lang as keyof typeof locales;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return locales[lang][key] || locales[defaultLang][key] || '...';
  };
}

export function useTranslatedPath(lang: keyof typeof locales) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
