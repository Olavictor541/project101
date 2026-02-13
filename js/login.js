// import helper functions from other files
import { isEmailValid, isPasswordValid } from "./validator.js";
import { showError, clearError } from "./display.js";
import { createSession, login} from "./auth.js";

// declare and assign variables
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("loginForm");

// get the error id to display it in
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


// start an event listener for the form to listen for submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page from reloading while verification is taking place

    clearError(emailError);
    clearError(passwordError);


    //remove any unnecessary space that is in emailInput / passwordInput
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    let hasError = false;

    // validate the email and password
    if(!isEmailValid(email)){
        showError(emailError, "Please enter a valid email address");
        hasError = true;
    }

    if(!isPasswordValid(password)){
        showError(passwordError, "Please enter a valid password");
        hasError = true;
    }

    if(hasError){return};

    // if the email and password are not the right one, display error
    if(!login(email, password)){
        showError(passwordError, "Please enter a valid email or password");
        return;
    }
    
    // call the token function
    createSession()

    window.location.href = "pages/dashboard.html";

});

