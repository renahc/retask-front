import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      await login(userData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-zinc-800 max-w-md p-8 space-y-4 rounded-md"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          className="w-full bg-zinc-700 py-2 rounded-md px-4"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className="w-full bg-zinc-700 py-2 rounded-md px-4"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit" className="bg-sky-500 w-full rounded-md py-2">
          Login
        </button>
        <p>
          Don't have an account yet?{" "}
          <Link className="text-sky-600" to="/register">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
