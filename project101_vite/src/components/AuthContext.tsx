import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { login as loginService, createSession } from "../services/auth";

// Define the context type
type AuthContextType = {
  isAuthenticated: boolean;
  loginUser: (email: string, password: string) => boolean;
  logoutUser: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  // Use React state to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for session token on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Function to handle user login
  function loginUser(email: string, password: string): boolean {
    const isValidUser = loginService(email, password);

    if (!isValidUser) {
      return false;
    }

    // Simulate session creation and update state
    createSession();
    setIsAuthenticated(true);
    return true;
  }

  // Function to handle user logout
  function logoutUser() {
    // Clear authentication state and session token
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
