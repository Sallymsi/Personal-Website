const ratio = .3

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

document.querySelectorAll('.reveal-L, .reveal-R, .reveal-B, .reveal-T').forEach(function (r) {
    observer.observe(r)
})

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}

/* Set button of home */
buttonContact.onclick = () => {
    window.location.href = `contact.html`;
}