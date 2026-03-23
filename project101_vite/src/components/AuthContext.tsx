import { createContext, useContext, useEffect, useState, type ReactNode} from "react";
import { login as loginService, createSession } from "../services/auth";

// create the context type
type AuthContextType = {
    isAuthenticated: boolean; 
    loginUser: (email: string, password: string) => boolean; 
    logoutUser: () => void;
};

// create a variable to hold the context value, "undefined" means that the context is not yet initialized, and it will be set when the AuthProvider component is rendered
const AuthContext = createContext<AuthContextType | undefined>(undefined); 

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  function loginUser(email: string, password: string): boolean {
    const isValidUser = loginService(email, password);

    if (!isValidUser) {
      return false;
    }

    createSession();
    setIsAuthenticated(true);
    return true;
  }

  function logoutUser() {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
