// what are the things that can change in the login page? The emailInput, passwordInput, errorMessages 
import { useState } from "react";
import { login, createSession } from "../services/auth";

function LoginPage(){
    // state of email and password input
    const [email, setEmail] = useState<string>(""); // setEmail is the funcition that updates the email state 
    const [password, setPassword] = useState<string>("");

    // state of error
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [authError, setAuthError] = useState<string>("");
    

    // when user types in email
    function emailChange(e: React.ChangeEvent<HTMLInputElement>){ // once user types in email, react notices the change and
        setEmail(e.target.value); // updates the email state with the new value from the input field
    }

    function passwordChange(e: React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value); 
    }
    
    // when user clicks login
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        // remove error messages
        setEmailError("");
        setPasswordError("");
        setAuthError("");

        let hasError = false;

        // validate email
        if(!email.includes("@")){
            setEmailError("Please enter a valid email address"); // update email error state 
            hasError = true;
        }

        // validate password
        if(password.length < 6){
            setPasswordError("Please enter a valid password")
            hasError = true;
        }

        if(hasError){return}; 

        // submit the form for authentication and check for error
        if(!login(email, password)){
            setAuthError("Please enter a valid email and password");
            return;
        };

        createSession();
        window.location.href = "/dashboard";
    

    }

    return (
        
    )
}
