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