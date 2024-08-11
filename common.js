document.addEventListener("DOMContentLoaded", function () {
    let previousWidth = window.innerWidth;

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    function handleResize() {
        const currentWidth = window.innerWidth;
        if (currentWidth !== previousWidth) {
            previousWidth = currentWidth;
            setScreenSize();
        }
    }

    window.addEventListener('resize', handleResize);
    setScreenSize();
});
