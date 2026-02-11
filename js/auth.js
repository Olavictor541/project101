// verified emails and passwords
const verfiedUser = {
    email: "victor.olaleye@gmail.com",
    password: "password123",
};


export function login(email, password){
    return (
        email === verfiedUser.email &&
        password === verfiedUser.password
    );
}

// create a function token generator
function randomVal(){
    return Math.random().toString(36).substring(2, 12); // return a randomly generated value
}

export function createSession(){
    let token = randomVal();
    localStorage.setItem('authToken', token);
}