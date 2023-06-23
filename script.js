"use strict"

const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phone = document.getElementById('phone');

// run when data are not currect...
let setError = (input, msg) => {
    let formControl = input.parentElement;
    let span = formControl.querySelector('span');
    formControl.className = 'form-control fail';
    span.innerText = msg;
}

// run when data are currect...
let setSuccess = (input) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}

let answere = (length, totalNum) => {
    if (length === totalNum) {
        let usernameVal=username.value;
        swal("Good job!", usernameVal+" Ragistration successfully!", "success");
        username.value="";
        email.value="";
        password.value="";
        cpassword.value="";
        phone.value="";

    }
}

let finalResult = () => {
    let allformControl = document.getElementsByClassName('form-control');
    let totalNum = 0;
    let length = allformControl.length - 1;
    for (let i = 0; i < allformControl.length; i++) {
        if (allformControl[i].className == 'form-control success') {
            totalNum = i;
            answere(length, totalNum);
        }

    }

}

let isEmail=(emailVal)=>{
    let symbolIndex=emailVal.indexOf("@");
    if(symbolIndex<=1) return true;
    let dotIndex=emailVal.lastIndexOf(".");
    if(dotIndex===(emailVal.length-1)) return true;
    if(dotIndex<=(symbolIndex+2)) return true;
    if(dotIndex===(emailVal.length-1)) return true;
    return false;
}

let valiDate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const phoneVal = phone.value.trim();

    // cheack username...
    if (usernameVal.length == "") {
        setError(username, "**please enter the name");
    } else if (usernameVal.length <= 2) {
        setError(username, "**enter must be 3 character");
    } else {
        setSuccess(username);
    }


    // check email...
    if (emailVal.length == "") {
        setError(email, "**please ente the email");
    }else if(isEmail(emailVal)){
        setError(email,"**please enter the valid email");
    }else {
        setSuccess(email);
    }


    // check phone number...
    if (phoneVal.length == "") {
        setError(phone, "**please enter the mobile number");
    } else if (phoneVal.length <= 9 || phoneVal.length > 10) {
        setError(phone, "**enter must be 10 digits");
    } else {
        setSuccess(phone);
    }


    // cheack password...
    if (passwordVal.length == "") {
        setError(password, "**please enter the password");
    } else if (passwordVal.length <= 7) {
        setError(password, "**enter must be 8 character");
    } else {
        setSuccess(password);
    }

    // check conform password...
    if (cpasswordVal.length == "") {
        setError(cpassword, "**please enter the conform password");
    } else if (cpasswordVal.length <= 7) {
        setError(cpassword, "**enter must be 8 character");
    } else if (passwordVal !== cpasswordVal) {
        setError(cpassword, "password not match");
    } else {
        setSuccess(cpassword);
    }

    finalResult();

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    valiDate();
})

