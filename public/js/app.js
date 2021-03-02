const btnLogin = document.querySelector(".login--button");
const btnRegister = document.querySelector(".register--button");
const divLogin = document.querySelector(".login");
const divRegister = document.querySelector(".register");

const showLogin = () => {
    divLogin.classList.add('visible');
    // btnLogin.classList.add('visible');
    divRegister.classList.add('invisible');
    // btnRegister.classList.add('invisible');
    divRegister.classList.remove('visible');
    // btnRegister.classList.remove('visible');
    divLogin.classList.remove('invisible');
    // btnLogin.classList.remove('invisible');
};

const showRegister = () => {
    divRegister.classList.add('visible');
    // btnRegister.classList.add('visible');
    divLogin.classList.add('invisible');
    // btnLogin.classList.add('invisible');
    divLogin.classList.remove('visible');
    // btnLogin.classList.remove('visible');
    divRegister.classList.remove('invisible');
    // btnRegister.classList.remove('invisible');
};


btnLogin.addEventListener('click', showLogin);
btnRegister.addEventListener('click', showRegister);