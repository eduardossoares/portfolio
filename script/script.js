const texts = document.querySelector('#texts')

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar')
    const afters = document.querySelectorAll('#after')

    navbar.classList.toggle('bg-white', window.scrollY > 0)
    navbar.classList.toggle('text-bg-color-one', window.scrollY > 0)
    navbar.classList.toggle('top-[-10px]', window.screenY > 0)
    navbar.classList.toggle('h-[9%]', window.screenY > 0)

    

})

const reveal = () => {
    window.revelar = ScrollReveal({ reset: true })

    ScrollReveal().reveal('#navbar', {
        duration: 1000,
        origin: 'top',
    })

    ScrollReveal().reveal('#texts', {
        viewOffset: {
            top: 100,
            bottom: 100
        },
        duration: 1000,
        origin: 'left',
    })

    ScrollReveal().reveal('#techs', {
        viewOffset: {
            top: 100,
            bottom: 500,
        },
        duration: 1000,
        origin: 'right',
    })

    ScrollReveal().reveal('#projects-text', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
    })

    ScrollReveal().reveal('#menu', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'left'
    })

    ScrollReveal().reveal('#forecast', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'right'
    })

    ScrollReveal().reveal('#barbershop', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'left'
    })

    ScrollReveal().reveal('#capture-page', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'right'
    })

    ScrollReveal().reveal('#to-do-list', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'left'
    })

    ScrollReveal().reveal('#contact-text', {
        origin: 'right',
        duration: 1000,
    })

    ScrollReveal().reveal('#cv', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'left'
    })

    ScrollReveal().reveal('#linkedin', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'right'
    })

    ScrollReveal().reveal('#github-img', {
        viewOffset: {
            top: 100,
            bottom: 100,
        },
        duration: 1000,
        origin: 'left'
    })
    
}
reveal()






