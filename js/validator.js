// This is the rule checker for validating email and password fields
export function isEmailVaid(email){
    return email.includes("@") && email.includes(".")
}

export function isPasswordValid(password){
    return password.length >= 6; // if the password is at least 6, return true
}