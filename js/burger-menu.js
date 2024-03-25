document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header__nav');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerElements = document.querySelectorAll('.burger-menu__item');
    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
        for (const span of burgerElements) {
            span.classList.toggle("active");
        }
    });
});