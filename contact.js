let myForm    = document.getElementById("form");
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let textarea = document.getElementById('textarea');
let sendIt = '';
const sendItlocal = JSON.stringify(localStorage.getItem('sendIt')) || 'didnt contact'; 
localStorage.setItem('sendIt', sendIt); 

let contact = document.getElementById('contact');


const validateForm = (event) => {

    event.preventDefault();

    let formulario = event.target

    console.log(formulario)
    console.log(name.value);
    console.log(surname.value);  
    console.log(email.value);  
    console.log(textarea.value);  
    console.log('form send it')



    sendIt = 'contact'


}

console.log(sendIt || 'didt contact ' )



myForm.addEventListener("submit", validateForm);


