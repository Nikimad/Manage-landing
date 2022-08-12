const primaryHeader = document.querySelector('.prim-header');
const navToggle = document.querySelector('.mobile-nav-toogle');
const primaryNav = document.querySelector('.prim-nav');



navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', !primaryNav.hasAttribute('data-visible'));
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});