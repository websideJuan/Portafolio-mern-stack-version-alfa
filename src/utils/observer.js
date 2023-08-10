const listSectionsAnimated = document.querySelectorAll('[data-section="true"]>div')

const observer = new IntersectionObserver(function  (entries) {
    entries.forEach(entry => {
        const sectionAnimated = entry.target

        sectionAnimated.classList.toggle('scale-0', !entry.isIntersecting)
    })
},{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
})


listSectionsAnimated.forEach(section => {
    observer.observe(section)
})