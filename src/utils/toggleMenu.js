const toggleMenu = document.querySelector('[data-toggle-menu="toggle"]')


function showMenu (e) {
    const ulMenuToggle = e.target.parentElement.parentElement.querySelector('#nav-content')
    const iconReplace = e.target

    if (ulMenuToggle.classList.contains('translate-x-full')) {

        ulMenuToggle.classList.remove('translate-x-full')
        iconReplace.classList.replace('fa-bars', 'fa-x')
        return
    }

    ulMenuToggle.classList.add('translate-x-full')
    iconReplace.classList.replace('fa-x', 'fa-bars')
}

toggleMenu.addEventListener('click', (e) => showMenu(e))