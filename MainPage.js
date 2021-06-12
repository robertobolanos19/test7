const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

const closeHomeMenu = document.querySelector('.closeHomeMenu')
const closeGalleryMenu = document.querySelector('.closeGalleryMenu')
const closeAboutMenu = document.querySelector('.closeAboutMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
closeHomeMenu.addEventListener('click', close)
closeGalleryMenu.addEventListener('click', close)
closeAboutMenu.addEventListener('click', close)

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0'
    mainMenu.style.transition = 'top 30s ease;'
}

function close(){
    mainMenu.style.top = '-150%'
    mainMenu.style.display = 'none'
}