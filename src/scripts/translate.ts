export default async function translate(
  sourceText: string,
  sourceLang: string,
  targetLang: string
) {
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLang +
    '&tl=' +
    targetLang +
    '&dt=t&q=' +
    encodeURI(sourceText);
  const json = await fetch(url).then((res) => res.json());
  return json[0][0][0];
}
