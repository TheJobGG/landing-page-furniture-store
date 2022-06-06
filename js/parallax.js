const parallaxElements = document.querySelectorAll('.parallax')

const addParallax = (entry, value) => {
    window.onscroll = () => {
        let y = window.innerHeight - entry.target.getBoundingClientRect().top
        entry.target.style.transform = 'translate3d(0, -' + (value * y) + 'px ,0)'
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            /* addParallax(entry, 0.15) */
            window.onscroll = () => {
                let y = window.innerHeight - entry.target.getBoundingClientRect().top
                entry.target.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
            }
        }
    }
    )
})

parallaxElements.forEach(element => {
    observer.observe(element)
})