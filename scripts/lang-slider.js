const langSlider = document.querySelector('#lang-slider');
const slider = langSlider.querySelector('.slider');

langSlider.addEventListener('click', (e) => {
  slider.classList.toggle('switch');
});
