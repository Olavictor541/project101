// this is responsible for talking/ sending messages to the screen
export function showError(element, message){
    element.textContent = message;
    element.classList.remove("hidden");  //  make message visible 
}

// clear error message
export function clearError(element){
    element.textContent = "";
    element.classList.add("hidden");
}