const openLogin = document.querySelector('.login__btn');
const loginModal = document.querySelector('.login__modal');
const loginModalOpen = document.querySelector('.login__modal_open');
const closeOverlay = document.querySelector('.page-main');
const openLoginMobile = document.querySelector('.main-nav__item-login')

//////open and close modal-window
openLogin.addEventListener('click', function () {
    if (!(loginModal.classList.contains('login__modal_open'))) {
        loginModal.classList.add('login__modal_open');
        openLogin.classList.add('login__btn_open');
    }
    else {
        loginModal.classList.remove('login__modal_open');
    }
});
openLoginMobile.addEventListener('click', function () {
    if (!(loginModal.classList.contains('login__modal_open'))) {
        loginModal.classList.add('login__modal_open');
    }
})


closeOverlay.addEventListener('click', function () {
    if (loginModal.classList.contains('login__modal_open')) {
        loginModal.classList.remove('login__modal_open');
        openLogin.classList.remove('login__btn_open')
    }
})

///////alert
const sendBtn = document.querySelector('.login-popup-input__button');
const emailValue = document.querySelector('.em');
const passValue = document.querySelector('.pass');

let sendForm = function () {
    if (Boolean(emailValue.value) == true && Boolean(passValue.value) == true && emailValue.validity.valid == false) {
        sendBtn.setAttribute('type', 'submit')
    } else if (emailValue.validity.valid == true && passValue.validity.valid == true) {
        sendBtn.setAttribute('type', 'submit')
        alert('Login: ' + emailValue.value + '\nPassword: ' + passValue.value)
        setTimeout(function () {
            loginModal.classList.remove('login__modal_open')
            location.reload()
        }, 500)
    } else if (Boolean(emailValue.value) == false || Boolean(passValue.value) == false) {
        alert('Введите электронную почту и пароль!')
    }
}
sendBtn.onclick = sendForm


///////register
let regBtn = document.querySelector('.register');
let logBtn

const loginHeader = document.querySelector('.login-popup__header')
const loginBtn = document.querySelectorAll('.login-popup__button')
const loginText = document.querySelector('.login-popup__text')
const rememberPass = document.querySelector('.remember-pass')
const popup = document.querySelector('.login-popup')
const popupDevide = document.querySelector('.login-popup__devide')
const loginPopupBtn = document.querySelector('.login-popup-input__button')
const register = document.querySelector('.registration')


let changeToLogin = function () {
    loginHeader.textContent = 'Create account';
    loginBtn.forEach((elem) => {
        elem.style.display = 'none'
    })
    loginText.style.display = 'none'
    rememberPass.style.display = 'none'
    popup.style.gap = '0px'
    popupDevide.style.margin = '0 0 15px 0'
    loginPopupBtn.textContent = 'Sign Up'
    register.innerHTML = '<span class="login-popup__text">Already have an account?<a href="#" class="login-popup__link log-in"> Log in</a></span>'
    logBtn = document.querySelector('.log-in')
    logBtn.onclick = () => changeToRegister()
}
let changeToRegister = function () {
    loginHeader.textContent = 'Log in to your account';
    loginBtn.forEach((elem) => {
        elem.style.display = 'block'
    })
    loginText.style.display = 'block'
    rememberPass.style.display = 'block'
    popup.style.gap = '20px'
    popupDevide.style.margin = '0 0 0 0'
    loginPopupBtn.textContent = 'Sign In'
    register.innerHTML = '<span class="login-popup__text">Don’t have an account?<a href="#" class="login-popup__link register"> Register</a></span>'
    regBtn = document.querySelector('.register');
    regBtn.onclick = () => changeToLogin()
}

regBtn.onclick = () => changeToLogin()
