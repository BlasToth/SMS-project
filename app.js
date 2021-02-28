const btnLogin = document.querySelector(".login--button");
const btnRegister = document.querySelector(".register--button");
const divLogin = document.querySelector(".login");
const divRegister = document.querySelector(".register");

const showLogin = () => {
divLogin.classList.add('visible');
divRegister.classList.remove('visible');
// btnLogin.classList.add('invisible');
};

const showRegister = () => {
    divRegister.classList.add('visible');
    divLogin.classList.remove('visible');
    // btnRegister.classList.add('invisible');
};


btnLogin.addEventListener('click', showLogin);
btnRegister.addEventListener('click', showRegister);
// btnRegister.addEventListener('click', () => {
//     divRegister.classList.add('visible');
// })