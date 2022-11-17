var swiper = new Swiper(".mySwiper", {
    loop: true,
    freeMode: {
        enabled: true,
        momentum: true,
        momentumBounce: false,
        minimumVelocity: 0.15,
        sticky: true,
    },
    effect: 'flip',
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination"
    }
});