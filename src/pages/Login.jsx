import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import mappedErrors from "../utils/mappedErrors";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const userData = {
        email,
        password,
      };

      await login(userData);
      navigate("/dashboard");
    } catch (error) {
      const getMappedErrors = mappedErrors(error);
      setErrors(getMappedErrors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center">
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default Login;
