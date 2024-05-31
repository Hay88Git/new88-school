// header animation
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-200px";
    }
}

var swiper = new Swiper(".cubeSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    breakpoints: {
        448: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});