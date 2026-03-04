// 1. compare input email and password with the correct email and password
const authUsers = {
    email: "test@gmail.com",
    password: "password123",
};


export function login(emailInput: string , passwordInput: string): boolean{
    return (
        emailInput === authUsers.email && 
        passwordInput === authUsers.password 
    );
}
// 2. If successful, create session token and redirect to dashboard page. 
function generateRand(){
    return Math.random().toString(36).substring(2, 12);
}

export function createSession(){
    const token = generateRand();
    localStorage.setItem("authToken", token);
}