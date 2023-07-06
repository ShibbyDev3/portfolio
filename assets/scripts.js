window.addEventListener(`DOMContentLoaded`, (event) => {
  const menuButtonClick = (event) => {
    event.target.closest(`.navbar__menuButton`).classList.toggle(`active`);
  };

  document.querySelector(`.navbar__menuButton`).addEventListener(`click`, menuButtonClick);
});
