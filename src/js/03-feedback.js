var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const submit = document.querySelector('[type="submit"]');
const FORM_KEY = 'feedback-form-state';
let formValue = {};


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

afterPageReload();
// onFormInput();
// як інший варіант - замість витягувати дані з сховища перед сабмітом, 
// можна викликати після перезавантаження сторінки onFormInput() - подію інпут, 
// і як результат я перезапишу formValue і при сабміт відправлю записані в полях дані, а не пустий об’єкт

function onFormInput() {    
    formValue.email = email.value;
    formValue.message = message.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formValue));
}

function onFormSubmit(event) {
    // formValue;
    event.preventDefault();    
    event.currentTarget.reset();

    let formValue = JSON.parse(localStorage.getItem(FORM_KEY));  
    if (formValue === null) {
        // console.log(someThing);
        return;
    }
      
    console.log(formValue);
    localStorage.removeItem(FORM_KEY);
};


function afterPageReload() {
    let someThing = JSON.parse(localStorage.getItem(FORM_KEY));

    if (someThing === null) {
        // console.log(someThing);
        return;
    }

    email.value = someThing.email || '';
    message.value = someThing.message || '';
    // console.log(someThing);
}

// function afterPageReload() {
//     let someThing={};
//     try {
//         someThing = localStorage.getItem(FORM_KEY) === null ? undefined : JSON.parse(localStorage.getItem(FORM_KEY));
//         console.log(someThing);
//     } catch (error) {
//         console.error("Get state error: ", error.message);
//     }
    
//     if (!someThing) {
//         return;
//     }

//     email.value = someThing.email;
//     message.value = someThing.message;
//     console.log(someThing);
// }


