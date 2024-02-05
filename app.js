const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation() {
    let elemcon = document.querySelector(".elem-container");
    let fixelem = document.querySelector(".fixed-img")
    elemcon.addEventListener("mouseenter", () => {
        fixelem.style.display = "block"
    });

    elemcon.addEventListener("mouseleave", () => {
        fixelem.style.display = "none"
    })

    let elems = document.querySelectorAll(".elem")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let img = e.getAttribute("data-image")
            fixelem.style.backgroundImage = `url(${img})`
        })
    })
}

function swiperanimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
    });
}

swiperanimation()
page4Animation()

let menu = document.querySelector("nav h3");
let full = document.querySelector(".full-scr");
let navimg = document.querySelector("nav img");
let flag = 0;

menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    } else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})