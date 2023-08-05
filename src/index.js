const toggleMenu = document.querySelector('[data-toggle-menu="toggle"]')

function showMenu () {
    const ulMenuToggle = this.parentElement.querySelector('ul')
    const iconReplace = this.querySelector('i.fa-solid')
    
    if (ulMenuToggle.classList.contains('translate-x-full')) {
        ulMenuToggle.classList.remove('translate-x-full')
        iconReplace.classList.replace('fa-bars', 'fa-x')
        return
    }

    ulMenuToggle.classList.add('translate-x-full')
    iconReplace.classList.replace('fa-x', 'fa-bars')
}

toggleMenu.addEventListener('click', showMenu)