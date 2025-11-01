let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let text_cont = document.querySelector('.text-cont')
const error = document.createElement('div');

    menuIcon.addEventListener('click', ()=>{
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active');
    })

document.getElementById('submit').addEventListener('click', ()=>{

    let email = document.getElementById('email').value.trim();
    localStorage.setItem('email', email)
})

