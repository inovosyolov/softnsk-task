document.addEventListener('DOMContentLoaded', () => {
    const handleScroll = () => {
        const header = document.querySelector("header");
        const introTitle = document.querySelector(".intro__title");
        if (introTitle) {
            const introTitlePosition = introTitle.getBoundingClientRect().top;
            const headerHeight = header.offsetHeight;
            if (introTitlePosition <= headerHeight) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    };
    window.addEventListener("scroll", handleScroll);
});