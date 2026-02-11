// if token doesn't exist, return to index page

const token = localStorage.getItem("authToken")

if (!token){
    window.location.href = "index.html";
    return;
}