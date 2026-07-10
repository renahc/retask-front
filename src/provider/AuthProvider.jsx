import { useState } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { loginUser, registerUser } from "../api/api.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const register = async (user) => {
    const userData = await registerUser(user);
    setUser(userData);
    return userData;
  };

  const login = async (user) => {
    const userData = await loginUser(user);

    setToken(userData.token);
    setUser(userData);

    return userData;
  };

  return (
    <AuthContext.Provider value={{ user, register, login, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
