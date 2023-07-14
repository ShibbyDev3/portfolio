window.addEventListener(`DOMContentLoaded`, () => {
  let prevScrollPos = window.scrollY;

  // window size check and function
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const mediaQueryFunction = (event) => {
    if (event.matches) {
      document.querySelector(`nav`).classList.add(`noAnimation`);
      if (document.querySelector(`.active`)) {
        document.querySelectorAll(`.active`).forEach((targetElement) => {
          targetElement.classList.remove(`active`);
        });
      }
      document.querySelectorAll(".nav__link").forEach((targetElement) => {
        targetElement.setAttribute(`tabindex`, `0`);
      });
    } else {
      if (document.querySelector(`.noAnimation`)) {
        document.querySelector(`.noAnimation`).classList.remove(`noAnimation`);
      }
    }
  };
  mediaQuery.addListener(mediaQueryFunction);
  //device check on load
  if (mediaQuery.matches) {
    document.querySelector(`nav`).classList.add(`noAnimation`);
  } else {
    document.querySelectorAll(".nav__link").forEach((targetElement) => {
      targetElement.setAttribute(`tabindex`, `-1`);
    });
  }

  // Dynamic dates and numbers so I don't have to update every year
  document.querySelector(`.totalYears`).innerHTML = `${new Date().getFullYear() - 2011}`;
  document.querySelector(`.frontendYears`).innerHTML = `${new Date().getFullYear() - 2018}`;
  document.querySelector(`.footer__copyrightYear`).innerHTML = `${new Date().getFullYear()}`;

  // hamburger toggle
  document.querySelector(`.navbar__menuButton`).addEventListener(`click`, (event) => {
    event.target.closest(`.navbar__menuButton`).classList.toggle(`active`);
    document.querySelector(`nav`).classList.toggle(`active`);
    if (document.querySelector(`.navbar__menuButton.active`)) {
      document.querySelectorAll(".nav__link").forEach((targetElement) => {
        targetElement.setAttribute(`tabindex`, `0`);
      });
      document.querySelector(".nav__link:first-child").focus();
    } else {
      document.querySelectorAll(".nav__link").forEach((targetElement) => {
        targetElement.setAttribute(`tabindex`, `-1`);
      });
    }
  });

  // closes mobile menu on link selection
  document.querySelectorAll(`.nav__link`).forEach((targetElement) => {
    targetElement.addEventListener(`click`, () => {
      if (document.querySelector(`nav.active`)) {
        document.querySelector(`nav`).classList.remove(`active`);
        document.querySelector(`.navbar__menuButton`).classList.remove(`active`);
      }
    });
  });

  // fix for weird mobile menu issue when resizing from desktop to mobile
  document.querySelector(`.nav__stickyWrapper`).addEventListener(`animationend`, () => {
    if (document.querySelector(`.animateOut`)) {
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`animateOut`);
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`sticky`);
    }

    if (document.querySelector(`.animateIn`)) {
      document.querySelector(`.nav__stickyWrapper`).classList.remove(`animateIn`);
    }
  });

  // if user scrolls up brings nav to them and hides nav when user scrolls down
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
