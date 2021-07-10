const hamburguer = document.getElementById('hamburguer');
const navUL = document.getElementById('nav-ul');

hamburguer.addEventListener('click', () =>{
    navUL.classList.toggle('show');
})

//smooth scroth 
const navigation = document.querySelector('.nav__links');

navigation.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})

//revealing sections on scroll
const allSections = document.querySelectorAll('.section');

const removeHiddenClass = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(removeHiddenClass, {
    root: null,
    threshold: 0.15
});

allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
})
