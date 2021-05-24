var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');

var changeMainNavVisibility = function() {
  mainNav.classList.toggle("main-nav--opened");
  mainNav.classList.toggle("main-nav--closed");
}

mainNav.classList.remove("main-nav--nojs");

mainNavToggle.addEventListener('click', changeMainNavVisibility);
