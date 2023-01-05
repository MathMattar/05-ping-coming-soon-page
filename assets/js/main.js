const email = document.getElementById('email');
const btn = document.getElementById('button');
const errorMessage = document.getElementById('email__error');

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const emailValue = email.value;

    //checar se o email é valido
    if (emailValue === '') {

        //adicionar a borda vermelha e a mensagem de erro
        errorMessage.textContent = 'Please provide a valid email address';
        email.classList = "error"
        return;
    } else {
        errorMessage.textContent = '';
        email.classList = 'input__email';
    }

    //sendo recarregar a página e salvar os dados no local storage
    email.value = "";

});

email.addEventListener("keyup", () => {

    //checar se o email é valido
    if (verificaEmail(email.value) !== true) {
        //adicionar a borda vermelha e a mensagem de erro
        errorMessage.textContent = 'Please provide a valid email address';
        email.classList = 'error';
    } else {
        errorMessage.textContent = '';
        email.classList = 'input__email';
    }
})

//checar se o email é valido
function verificaEmail(email) {
    let emailVerifica = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailVerifica.test(email);
};


