// bring everything all together

import { isEmailVaid, isPasswordValid } from "./validator.js";
import { login } from "./auth.js";
import { showError, clearError } from "./display.js";

const form = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");


form.addEventListener("submit", (event) => {
    event.preventDefault(); // don't reload page

    clearError(emailError);
    clearError(passwordError);

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    //check email and password
    if (!isEmailVaid(email)){
        showError(emailError, "Please enter a valid email address");
        hasError = true;
    }

    if (!isPasswordValid(password)){
        showError(passwordError, "Please enter a valid password");
        hasError = true;
    }

    const isAuthenticated = login(email, password);

    if(!isAuthenticated){
        showError(passwordError, "Invalid email or password");
        return;
    }

    // else if successful, login
    window.location.href = "../pages/dashboard.html"

});