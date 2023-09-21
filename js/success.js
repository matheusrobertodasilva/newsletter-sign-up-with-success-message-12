const component = document.querySelector('.content__thanks');

const cadastro = localStorage.getItem('cadastro');

const cadastroCovertido = JSON.parse(cadastro);

component.innerHTML = `
    <img src="./images/icon-success.svg" alt="icone de sucesso" class="content__image">
    <h1 class="thanks__title">Thanks for subscribing!</h1>
    <p class="thanks__descrition">A confirmation email has been sent to <span>${cadastroCovertido.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
`