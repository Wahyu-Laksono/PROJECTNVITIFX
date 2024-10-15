const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navLink = document.querySelectorAll('.navA')

toggleMenu.addEventListener('click', () => {
navbar.classList.toggle('show')
})
for(let i=0; i < navLink.length; i++){
    navLink[i].addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}