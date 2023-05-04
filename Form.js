const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    number: /^\d{7,14}$/, // 7 to 14 numbers.
    address: /^[a-zA-Z0-9\s\.]+$/, // Letters, spaces, numbers and periods
    message: /^(?!.*(shit|fuck|fuck you|bitch)).*$/ // No 4 rudeness
}

const fields = {
    name: false,
    lastName: false,
    email: false,
    number: false,
    address: false,
    message: false
}

const validateform = (e) => {
    switch (e.target.name) {
        case "name":
            validateField(expressions.name, e.target, 'name');
        break;
        case "lastName":
            validateField(expressions.lastName, e.target, 'lastName');
        break;
        case "email":
            validateField(expressions.email, e.target, 'email');
        break;
        case "number":
            validateField(expressions.number, e.target, 'number');
        break;
        case "address":
            validateField(expressions.address, e.target, 'address');
        break;
        case "message":
            validateField(expressions.message, e.target, 'message');

        break;
    }
}

const validateField = (expression, input, field) => {
    if(expression.test(input.value)){
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-circle-check');
        document.querySelector(`#group__${field} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#group__${field} i`).classList.remove('fa-circle-check');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
        fields[field] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateform);
    input.addEventListener('blur', validateform);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const send = document.getElementById('send');
    if(fields.name && fields.lastName && fields.email && fields.number && fields.address && fields.message){
        form.reset();

        document.getElementById('form__message-success').classList.add('form__message-success-active');
        setTimeout(() => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active');
        }, 5000);

        document.querySelectorAll('.form__group-correct').forEach((icon) =>{
            icon.classList.remove('form__group-correct');
        })
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
        setTimeout(() => {
            document.getElementById('form__message').classList.remove('form__message-active');
        }, 10000);
    } 
});