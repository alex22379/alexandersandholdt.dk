document.addEventListener('DOMContentLoaded', (e) => {
  //updateLang(getLanguage());

  const langSlider = document.querySelector('#lang-slider');
  const slider = langSlider.querySelector('.slider');

  langSlider.addEventListener('click', (e) => {
    slider.classList.toggle('switch');

    if (slider.classList.contains('switch')) setLanguage('en');
    else setLanguage('da');

    //updateLang(getLanguage());
  });
});

/*function getJsonValueFromPath(jsonObject, path) {
  try {
    const pathArray = path.split('.');

    // Use the reduce() method to traverse the object based on the path
    const value = pathArray.reduce((obj, key) => {
      return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
    }, jsonObject);

    return value;
  } catch (error) {
    console.error('Error parsing JSON or traversing the path:', error);
    return undefined;
  }
}

async function updateLang(lang) {
  const res = await fetch(`./lang/${lang}.json`);
  const json = await res.json();

  const elements = document.querySelectorAll('[data-lang-path]');
  Array.from(elements).forEach((element) => {
    const path = element.dataset.langPath;
    let value = getJsonValueFromPath(json, path);
    element.textContent = value;
  });
}*/

function getLanguage() {
  let lang = localStorage.getItem('lang');
  if (lang == null) {
    if (!navigator.language.contains('da')) setLanguage('en');
    else setLanguage('da');
  }
  return lang;
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
}
