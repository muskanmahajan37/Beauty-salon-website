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
    console.log(id)
})