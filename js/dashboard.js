import { isAuthenticated } from "./authState.js";


// if token doesn't exist, return to index page
if(!isAuthenticated()){
    window.location.href = "../index.html";
}

const nav = 
// listen for sign out request and logout
