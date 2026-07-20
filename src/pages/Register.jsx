import { useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import mappedErrors from "../utils/mappedErrors.js";
import RegisterForm from "../components/RegisterForm.jsx";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        username,
        email,
        password,
      };

      const user = await register(userData);

      console.log(user);
      navigate("/login");
    } catch (error) {
      const getMappedErrors = mappedErrors(error);
      setErrors(getMappedErrors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center">
      <RegisterForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default Register;
