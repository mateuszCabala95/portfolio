const Header = {
    init: ()=>{
      Header.toggleMenu()
    },

    menuBtn: document.querySelector('.header__mobile-btn'),
    menu: document.querySelector('.nav'),
    links: document.querySelectorAll('.nav__item'),

    toggleMenu: () => {
        Header.menuBtn.addEventListener('click',()=>{
            Header.menuBtn.classList.toggle('header__mobile-btn--open')
            Header.menu.classList.toggle('nav--open')
        })

        Header.links.forEach(link => link.addEventListener('click', ()=>{
            Header.menu.classList.toggle('nav--open');
            Header.menuBtn.classList.toggle('header__mobile-btn--open');
        }))
    }


}

Header.init()
