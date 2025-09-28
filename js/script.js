// Seleciona o elemento com a CLASSE '.container'
const container = document.querySelector('.container'); 
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// 1. Adiciona a classe 'active' ao container ao clicar em "Cadastre-se"
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// 2. Remove a classe 'active' do container ao clicar em "Login"
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});