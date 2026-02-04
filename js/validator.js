// verify if email is valid
export function isEmailValid(email){
    return email.includes("@") && email.includes(".");
}

// verify if password has the number of lengths
export function isPasswordValid(password){
    return password.length >= 6;
}