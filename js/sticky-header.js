document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll", () => {
        var header = document.querySelector("header");
        var introTitle = document.querySelector(".intro__title");
        
        if (introTitle) {
            var introTitlePosition = introTitle.getBoundingClientRect().top;
            var headerHeight = header.offsetHeight;
            
            if (introTitlePosition <= headerHeight) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    });
});