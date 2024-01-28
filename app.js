const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

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