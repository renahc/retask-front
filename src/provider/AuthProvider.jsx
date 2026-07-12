import { useState } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { loginUser, registerUser } from "../api/auth.js";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (localStorage.getItem("token")) return true;
    return false;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = async (user) => {
    const userData = await registerUser(user);
    setUser(userData.user);
    return userData;
  };

  const login = async (user) => {
    const userData = await loginUser(user);

    setToken(userData.token);
    setUser(userData.user);

    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user));

    setIsAuthenticated(true);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, token, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
