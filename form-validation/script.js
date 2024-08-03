const formElement = document.querySelector('.container');
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const numberElement = document.querySelector('#Mobilenumber');
const passwordElement = document.querySelector('#password'); 
const CpasswordElement = document.querySelector('#Cpassword'); 

formElement.addEventListener('submit', (event) => {
    if (!validation()) {
        console.log(false); 
        event.preventDefault();
    } else {
        alert('Registered successfully');
    }
});

function validation() {
    const name = nameElement.value.trim();
    const email = emailElement.value.trim();
    const number = numberElement.value.trim();
    const password = passwordElement.value.trim();
    const Cpassword = CpasswordElement.value.trim();

    let result = true; 
    if (name ==='') {
        result = false; 
        error(nameElement,'name required');
    }
    else{
        success(nameElement);
    }
    if(email==='')
    {
        error(emailElement,'email required');
    }
    else{
        success(emailElement);
    }
    if (number === '') {
        result = false;
        error(numberElement,'number required');
    } else if (number.length != 10) { 
        result = false;
        error(numberElement,'invalid mobile number');
    }
    else{
        success(numberElement);
    }
    if (password.length < 8) {
        result = false;
        error(passwordElement,'week password');
    }
    else{
        success(passwordElement);
    }
    if (Cpassword != password) { 
        result = false;
        error(CpasswordElement,'password does not match');
    }
    else{
        success(CpasswordElement);
    }
    return result;
}
function success(element)
{
const parent=element.parentElement;
const errorElement=parent.querySelector('.error');
errorElement.innerText='';
parent.classList.add('success');
parent.classList.remove('error');
}
function error(element,message)
{
const parent=element.parentElement;
const errorElement=parent.querySelector('.error');
errorElement.innerText=message;
parent.classList.add('error');
parent.classList.remove('success');
}
