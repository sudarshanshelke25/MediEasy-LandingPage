const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-large-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};



ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-image .image-bg ", {
    duration: 1500,
    delay: 500,
});

ScrollReveal().reveal(".header-image .image-content-1", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1000,
});

ScrollReveal().reveal(".header-image .image-content-2", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1500,
});

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".header-content .content-btn", {
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".nav-links li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
    delay: 3500,
});

ScrollReveal().reveal(".nav-btns .btn", {
    ...scrollRevealOption,
    origin: "top",
    delay: 4000,
});
