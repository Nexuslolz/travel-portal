const openBtn = document.querySelector('.main-nav__btn-wrapper')
const menuBurger = document.querySelector('.main-nav__list')
const closeBtn = document.querySelectorAll('.main-nav__item')
const closeOverlayMobile = document.querySelector('.page-main');


openBtn.addEventListener('click', function(){
    if(!(menuBurger.classList.contains('main-nav__list_open'))){
        menuBurger.classList.add('main-nav__list_open')
    }
});

closeBtn.forEach(elem => {
    elem.addEventListener('click', function(){
        if(menuBurger.classList.contains('main-nav__list_open')){
            menuBurger.classList.toggle('main-nav__list_open')
        }
    })
})


closeOverlayMobile.addEventListener('click', function(){
    if(menuBurger.classList.contains('main-nav__list_open')){
        menuBurger.classList.remove('main-nav__list_open')
    }
})