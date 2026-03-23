import { isAuthenticated } from "../components/AuthContext.tsx"

if (!isAuthenticated){
    window.location.href = "../pages/LoginPage.tsx"
}
else{
    window.location.href = "../pages/DashboardPage.tsx"
}