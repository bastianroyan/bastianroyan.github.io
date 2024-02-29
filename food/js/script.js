const menuToggle = document.querySelector('.header .menu-toggle input');
const nav = document.querySelector('.navbar .navbar-nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
