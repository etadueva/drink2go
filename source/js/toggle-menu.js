let button = document.querySelector('.button-nav--open-menu');
let menu = document.querySelector('.main-header__list--opened');
let buttons = document.querySelector('.main-header__buttons');

const openTheMenu  = () => {
  menu.classList.remove("main-header__list--nojs");
  buttons.classList.remove("main-header__buttons--nojs");

  button.addEventListener("click", function() {
    if (menu.classList.contains("main-header__list--opened")) {
      menu.classList.add("main-header__list--closed");
      menu.classList.remove("main-header__list--opened");
      button.classList.add("button-nav--close-menu");
      button.classList.remove("button-nav--open-menu");
    } else {
      menu.classList.add("main-header__list--opened");
      menu.classList.remove("main-header__list--closed");
      button.classList.add("button-nav--open-menu");
      button.classList.remove("button-nav--close-menu");
    }
  });

};

export { openTheMenu };
// mainButton.addEventListener("click", function () {
//   if (mainList.classList.contains("main-header__list--closed")) {
//     mainList.classList.remove("main-header__list--closed");
//     mainList.classList.add("main-header__list--opened");
//   } else {
//     mainList.classList.add("main-header__list--closed");
//     mainList.classList.remove("main-header__list--opened");
//   }
// });

// mainButton.addEventListener("click", function () {
//   if (mainButton.classList.contains("main-header__button--close")) {
//     mainButton.classList.remove("main-header__button--close");
//     mainButton.classList.add("main-header__button--open");
//   } else {
//     mainButton.classList.add("main-header__button--close");
//     mainButton.classList.remove("main-header__button--open");
//   }
// });