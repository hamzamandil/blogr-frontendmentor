let hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
})