let menuSection = document.querySelectorAll('nav li');

alert(menuSection[0]);

// for window scrolldown event

window.onscroll = () => {
  let mainSection = document.querySelectorAll('main section');

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;
    if (rect < window.innerHeight - 200) {
      menuSection.forEach((v) => v.classList.remove('active'));
      menuSection[i].classList.add('active');
    }
  });
};
