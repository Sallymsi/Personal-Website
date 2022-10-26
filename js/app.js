const ratio = .5

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
};

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal-L, .reveal-R').forEach(function (r) {
    observer.observe(r)
})


menuBurger.onclick = () => {
    var menu = document.querySelector('#menu_burger');
    var bulle = document.querySelector('.menu-ovale');
    menu.classList.add("menu_burger_animation");
    bulle.classList.add("menu-ovale-animation");
}


