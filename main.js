const hamburguer = document.getElementById("hamburguer");
const navUL = document.getElementById("nav-ul");
const banner = document.querySelector(".banner");
const header = document.querySelector("header");
const navigation = document.querySelector(".nav__links");
const allSections = document.querySelectorAll(".section");

hamburguer.addEventListener("click", () => {
    navUL.classList.toggle("show");
});

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

//sticky menu
const addStickClass = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        header.classList.remove("sticky");
    }
    if (!entry.isIntersecting) {
        header.classList.add("sticky");
    }
};

const bannerOberver = new IntersectionObserver(addStickClass, {
    root: null,
    threshold: 0,
});
bannerOberver.observe(banner);
