import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.js";
import {
  loginUser,
  registerUser,
  verifySession,
  logoutUser,
} from "../api/auth.js";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const userData = await verifySession();

        if (!userData) {
          setUser(null);
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setUser(userData.user);
        }

        setIsLoading(false);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const register = async (user) => {
    const userData = await registerUser(user);
    setUser(userData.user);
    return userData;
  };

  const login = async (user) => {
    const userData = await loginUser(user);

    setUser(userData.user);
    setIsAuthenticated(true);

    return userData;
  };

  const logout = async () => {
    const data = await logoutUser();

    setUser(null);
    setIsAuthenticated(false);

    return data;
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, isAuthenticated, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
