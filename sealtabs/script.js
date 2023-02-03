/*form Inputs*/
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const radioValue = document.querySelectorAll('.radio');
const checkboxValue = document.querySelectorAll('.checkbox');
const phoneNumber = document.getElementById('phone');
/*Error Messages */
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirm-password-error');
const phoneError = document.getElementById('phone-error');
/*Displaying Form Input*/
const displayData = document.getElementById('display');
const formInputName = document.getElementById('form-input__name');
const formInputEmail = document.getElementById('form-input__email');
const formInputPhone = document.getElementById('form-input__phone');
const cancelButton = document.getElementById('cancel');
const confirmButton = document.getElementById('confirm');

let valid;

userName.addEventListener('input',()=>{
    if(!userName.value.match(/^[A-Za-z][A-Za-z ]{2,30}$/)){
        userName.style['boxShadow'] = '0 0 0 3px #fe0909';
        nameError.textContent = 'enter valid name only';
        valid = false;
    }
    else{
        userName.style['boxShadow'] = '0 0 0 3px #2cf429';   
        valid = true;
        nameError.textContent=''
    }
})


email.addEventListener('input',()=>{
 if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){ 
    email.style["boxShadow"] = "0 0 0 2px #fe0909";
    emailError.textContent = 'enter correct email';
    valid = false;
    } 
    else{
        valid = true;
        email.style['boxShadow'] = '0 0 0 3px #2cf429';   
        emailError.textContent = '';
    }
})

password.addEventListener('input',()=>{
    if(password.value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g)){
        passwordError.textContent =''
        password.style['boxShadow'] = '0 0 0 2px #2cf429';
        confirmPassword.addEventListener('input',()=>{
            if(password.value === confirmPassword.value){
                confirmError.textContent = '';
                confirmPassword.style['boxShadow'] = '0 0 0 2px #2cf429';   
                valid = true;
                
            }
            else{
                valid = false;
                confirmError.textContent ='Passwords doesn\'t match';
                confirmPassword.style["boxShadow"] = "0 0 0 2px #fe0909";
            }
        })
    }
    else{
        password.style["boxShadow"] = "0 0 0 2px #fe0909";
        passwordError.textContent = 'Minimum 6 chars with 1 letter, 1 number, 1 Caps, 1 special char';
        valid = false;
    }
})

phoneNumber.addEventListener('input',()=>{
    if (!phoneNumber.value.match(/^\d{10}$/g)){
        valid = false;
        phoneNumber.style["boxShadow"] = "0 0 0 2px #fe0909";
        phoneError.textContent = 'Enter 10 digit phone number';
    }
    else{
        valid = true;
        phoneNumber.style["boxShadow"] = "0 0 0 2px #2cf429";
        phoneError.textContent = '';
    }
})

form.addEventListener('submit', (e)=>{
    if(valid == true){
        e.preventDefault();
        displayData.style.display = 'flex';
        formInputName.textContent = `Name : ${userName.value}`;
        formInputEmail.textContent =`Email : ${email.value}`;
        formInputPhone.textContent =`Phone Number : ${phoneNumber.value}`;    
        cancelButton.addEventListener('click',()=>{
            e.preventDefault();
            displayData.style.display = 'none';
        })
        confirmButton.addEventListener('click',()=>{
            location.reload();
        })
    }
    else if(valid == false){
        e.preventDefault();
    }
});