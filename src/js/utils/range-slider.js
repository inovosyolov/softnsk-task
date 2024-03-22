document.addEventListener('DOMContentLoaded', () => {
    (function() {
        const value = document.querySelector('.range-slider__value');
        const input = document.querySelector('.range-slider__input');
        
        input.addEventListener('input', () => {
            value.textContent = `${input.value} %`;
        });
    })();
});
