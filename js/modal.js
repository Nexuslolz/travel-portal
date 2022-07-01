const openLogin = document.querySelector('.login__btn');
const loginModal = document.querySelector('.login__modal');
const closeOverlay = document.querySelector('.page-main');
const openLoginMobile = document.querySelector('.main-nav__item-login')


openLogin.addEventListener('click',function(){
    if(!(loginModal.classList.contains('login__modal_open'))){
        loginModal.classList.add('login__modal_open');
        openLogin.classList.add('login__btn_open');
    } 
    else {
        loginModal.classList.remove('login__modal_open');
    }
});
openLoginMobile.addEventListener('click', function(){
    if(!(loginModal.classList.contains('login__modal_open'))){
        loginModal.classList.add('login__modal_open');
}})


closeOverlay.addEventListener('click', function() {
    if(loginModal.classList.contains('login__modal_open')){
        loginModal.classList.remove('login__modal_open');
        openLogin.classList.remove('login__btn_open')
    }
})



