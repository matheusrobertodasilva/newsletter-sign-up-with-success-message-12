const formulary = document.querySelector(".formulary");
const btnForm = document.querySelector(".formulary__button")

formulary.addEventListener('submit', (e) => {
    e.preventDefault()

    const cadastros = {
        'email': e.target.elements['email'].value
    }

    localStorage.setItem('cadastro', JSON.stringify(cadastros));

    window.location.href = './Success.html';
    }
)
