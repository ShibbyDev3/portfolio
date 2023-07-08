window.addEventListener(`DOMContentLoaded`, (event) => {
  let prevScrollPos = window.scrollY;
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const mediaQueryFunction = (event) => {
    if (event.matches) {
      document.querySelector(`nav`).classList.add(`noAnimation`);
      if (document.querySelector(`.active`)) {
        document.querySelectorAll(`.active`).forEach((targetElement) => {
          targetElement.classList.remove(`active`);
        });
      }
    } else {
      if (document.querySelector(`.noAnimation`)) {
        document.querySelector(`.noAnimation`).classList.remove(`noAnimation`);
      }
    }
  };
  mediaQuery.addListener(mediaQueryFunction);

  document.querySelector(`.totalYears`).innerHTML = `${new Date().getFullYear() - 2011}`;
  document.querySelector(`.frontendYears`).innerHTML = `${new Date().getFullYear() - 2018}`;
  document.querySelector(`.footer__copyrightYear`).innerHTML = `${new Date().getFullYear()}`;

  document.querySelector(`.navbar__menuButton`).addEventListener(`click`, (event) => {
    event.target.closest(`.navbar__menuButton`).classList.toggle(`active`);
    document.querySelector(`nav`).classList.toggle(`active`);
  });

  document.querySelectorAll(`.nav__link`).forEach((targetElement) => {
    targetElement.addEventListener(`click`, () => {
      if (document.querySelector(`nav.active`)) {
        document.querySelector(`nav`).classList.remove(`active`);
        document.querySelector(`.navbar__menuButton`).classList.remove(`active`);
      }
    });
  });

  document.querySelector(`.nav__stickyWrapper`).addEventListener(`animationend`, () => {
    if (document.querySelector(`.animateOut`)) {
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`animateOut`);
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`sticky`);
    }

    if (document.querySelector(`.animateIn`)) {
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`animateIn`);
    }
  });

  window.addEventListener("scroll", (event) => {
    if (window.scrollY === 0) {
      if (document.querySelector(`.sticky`)) {
        document.querySelector(`.nav__stickyWrapper`).classList.remove(`sticky`);
      }
    }

    if (window.scrollY > prevScrollPos) {
      prevScrollPos = window.scrollY;
      if (document.querySelector(`.nav__stickyWrapper.sticky`)) {
        document.querySelector(`.nav__stickyWrapper`).classList.add(`animateOut`);
      }
    }

    if (window.scrollY < prevScrollPos - 200) {
      if (!document.querySelector(`.nav__stickyWrapper.sticky`)) {
        document.querySelector(`.nav__stickyWrapper`).classList.add(`sticky`);
        document.querySelector(`.nav__stickyWrapper`).classList.add(`animateIn`);
        prevScrollPos = window.scrollY;
      }
      if (document.querySelector(`.nav__stickyWrapper.sticky`)) {
        prevScrollPos = window.scrollY;
      }
    }
  });
});
