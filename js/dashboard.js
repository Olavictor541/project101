import { isAuthenticated } from "./authState.js";
import { logoutFunc } from "./authState.js";

const logOutBtn = document.getElementById("logOut");

// if token doesn't exist, return to index page
if(!isAuthenticated()){
    window.location.href = "../index.html";
}


// listen for sign out request and logout
logOutBtn.addEventListener("click", (event) => {
    // prevent href default behavior
    event.preventDefault();
    logoutFunc();
});

