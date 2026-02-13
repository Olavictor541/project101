



export function isAuthenticated(){
    // Check if token exists
    const token = localStorage.getItem("authToken")

    // Return true/false if user is authenticated
    if (!token){
        return false;
    }
    return true;
}

// Logout function (remove token)
export function logoutFunc(){
    const rmToken = localStorage.removeItem("authToken");
    window.location.href = "index.html"
}