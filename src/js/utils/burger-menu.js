document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header__nav');
    const navLink = document.querySelectorAll('.header__nav-link');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerElements = document.querySelectorAll('.burger-menu__item');
    
    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
        for (const span of burgerElements) {
            span.classList.toggle("active");
        }
    });

    navLink.forEach(element => {
        element.addEventListener("click", () => {
            nav.classList.remove("active");
            burgerElements.forEach(span => {
                span.classList.remove("active");
            });
        });
    });
});
