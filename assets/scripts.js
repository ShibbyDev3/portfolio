window.addEventListener(`DOMContentLoaded`, (event) => {
  const menuButtonClick = (event) => {
    event.target.closest(`.navbar__menuButton`).classList.toggle(`active`);
    document.querySelector(`nav`).classList.toggle(`active`);
  };

  document.querySelector(`.navbar__menuButton`).addEventListener(`click`, menuButtonClick);
  document.querySelector(`.totalYears`).innerHTML = `${new Date().getFullYear() - 2011}`;
  document.querySelector(`.frontendYears`).innerHTML = `${new Date().getFullYear() - 2018}`;
  document.querySelector(`.footer__copyrightYear`).innerHTML = `${new Date().getFullYear()}`;
});
