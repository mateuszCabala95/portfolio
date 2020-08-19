const Header = {
    init: () => {
        Header.toggleMenu()
    },

    menuBtn: document.querySelector('.header__mobile-btn'),
    menu: document.querySelector('.nav'),
    links: document.querySelectorAll('.nav__item'),

    toggleMenu: () => {
        Header.menuBtn.addEventListener('click', () => {
            Header.menuBtn.classList.toggle('header__mobile-btn--open')
            Header.menu.classList.toggle('nav--open')
        })

        Header.links.forEach(link => link.addEventListener('click', () => {
            Header.menu.classList.toggle('nav--open');
            Header.menuBtn.classList.toggle('header__mobile-btn--open');
        }))
    }


}


const MoJSShape = {
    init: () => {
        window.addEventListener('click', (e) => {
            MoJSShape.sparksShape.tune({
                x: e.pageX,

                y: e.pageY,

            })
                .replay()
                .generate();
        })
    },

    sparksShape: new mojs.Burst({
        top: 0,
        left: 0,
        radius: {0: 30, easing: 'cubic.out'},
        angle: {0: 90, easing: 'quad.out'},
        count: 50,
        children: {
            shape: 'cross',
            stroke: '#93A4AF',
            points: 12,
            radius: 10,
            fill: 'none',
            angle: {0: 360},
            duration: 300
        }
    }),




}

Header.init();
MoJSShape.init();
