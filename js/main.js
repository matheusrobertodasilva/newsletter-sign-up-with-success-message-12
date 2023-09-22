const formulary = document.querySelector(".formulary");
const btnForm = document.querySelector(".formulary__button")
const email = document.querySelector('#email')

formulary.addEventListener('submit', (e) => {
    e.preventDefault()

    const cadastros = {
        'email': e.target.elements['email'].value
    }

    localStorage.setItem('cadastro', JSON.stringify(cadastros));

    window.location.href = './Success.html';
    }

)

email.addEventListener('blur', ()=> checkField(email));
email.addEventListener('invalid', evento => evento.preventDefault())


const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const messages = {
    email: {
        valueMissing: "The email field cannot be empty.",
        typeMismatch: "Please fill in a valid email address.",
        tooShort: "Short email"
    }
}

function checkField(field){
    let message = '';
    field.setCustomValidity('');
    
    errorTypes.forEach(erro => {
        if(field.validity[erro]){
            message = messages[field.name][erro];
            console.log(message)
        }
    })

    const erroMessage = field.parentNode.querySelector('.message-erro');
    const validadorDeInput = field.checkValidity();

    if(!validadorDeInput){
        erroMessage.textContent = message;
    } else {
        erroMessage.textContent = "";
    }
}
