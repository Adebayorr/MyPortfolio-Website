const hamburger = document.querySelector('.hamburger')
const navigations = document.querySelector('.nav_links')
const hamburgerLines = document.querySelectorAll('path')
console.log(hamburgerLines)
let openMenu = false
hamburger.addEventListener('click', (e) => {
    if (openMenu) {
        hamburgerLines[0].classList.remove('line_top')
        hamburgerLines[1].classList.remove('line_mid')
        hamburgerLines[2].classList.remove('line_bot')
        navigations.classList.remove('open_links')
        openMenu = !openMenu
    } else {
        hamburgerLines[0].classList.add('line_top')
        hamburgerLines[1].classList.add('line_mid')
        hamburgerLines[2].classList.add('line_bot')
        navigations.classList.add('open_links')
        openMenu = !openMenu
    }
})
console.log(navigations)