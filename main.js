const banner = document.querySelector(".banner");
const header = document.querySelector("header");
const navigation = document.querySelector(".nav__links");
const allSections = document.querySelectorAll(".section");
const menu = document.querySelector(".hidden-menu");
const menuIcon = document.querySelector("#hamburguer");
const headeMobile = document.querySelector("header");

//smooth scroth
navigation.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

//revealing sections on scroll
const removeHiddenClass = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(removeHiddenClass, {
    root: null,
    threshold: 0.1,
});

allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

//menu mobile
menu.addEventListener("click", function (e) {
    menu.classList.remove("display-menu");
});

menuIcon.addEventListener("click", function () {
    menu.classList.toggle("display-menu");
    headeMobile.classList.toggle("mobile");
});
