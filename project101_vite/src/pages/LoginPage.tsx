// what are the things that can change in the login page? The emailInput, passwordInput, errorMessages. Create states for those
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
        if(!email.includes("@") || !email.includes(".")){
            setEmailError("Please enter a valid email address"); // update email error state 
            hasError = true;
        }

        // validate password
        if(password.length < 6){
            setPasswordError("Password must be at least 6 characters")
            hasError = true;
        }

        if(hasError){return}; 

        // submit the form for authentication and check for error
        if(!login(email, password)){
            setAuthError("Please enter a valid email and password");
            return;
        };

        createSession();
        window.location.href = "../../../pages/dashboard.html";
    

    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">

            <div className="w-full max-w-sm md:max-w-sm bg-white rounded-3xl shadow-md p-8">
                <h1 className="font-semibold text-sm">Hello!</h1>
                <p className="mt-2">Sign up to get started</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div>
                        <input
                            type="email"
                            placeholder=" Email Address"
                            className="w-full p-3  outline-none border rounded-full"
                            value={email}
                            onChange={emailChange}
                        />

                        {emailError && (

                            <p className="text-red-500 text-xs mt-1"> {emailError} </p>

                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3  outline-none rounded-full border"
                            value={password}
                            onChange={passwordChange}
                        />
                        
                        { passwordError && (
                            
                            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                            
                        )}

                        { authError && (

                            <p className="text-red-500 text-xs mt-1">{authError}</p>

                        )}
                    </div>


                    <button type="submit" className="mt-6 w-full rounded-full bg-sky-400 py-4 active:bg-sky-600 hover:bg-sky-500">
                        Login
                    </button>
                
                </form>
                
                
                <p className="mt-4">
                    Don't have an account?
                    <a className="font-semibold hover:underline" href="#">
                        Sign up now
                    </a>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;

