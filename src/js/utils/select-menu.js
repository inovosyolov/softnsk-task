document.addEventListener('DOMContentLoaded', function() {
    (function() {
        const selectMenu = document.querySelector('.select-menu');
        const selectMenuTitle = document.querySelector('.select-menu__title');
        const selectMenuList = document.querySelector('.select-menu__list');
        const selectMenuItems = document.querySelectorAll('.select-menu__item');
        const selectMenuInput = document.querySelector('[name="select"]');

        function toggleDropdown() {
            selectMenu.classList.toggle("active");
            selectMenuList.classList.toggle("active");
        }

        function selectItem(e) {
            selectMenuTitle.innerHTML = e.innerHTML;
            selectMenuInput.value = e.textContent;
        }

        selectMenu.addEventListener("click", toggleDropdown);

        selectMenuItems.forEach((item) => {
            item.addEventListener('click', () => {
                selectItem(item);
            });
        });
    })();
});