const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

const changeMainNavVisibility = () => {
  mainNav.classList.toggle("main-nav--opened");
  mainNav.classList.toggle("main-nav--closed");
}

mainNav.classList.remove("main-nav--nojs");

mainNavToggle.addEventListener('click', changeMainNavVisibility);
