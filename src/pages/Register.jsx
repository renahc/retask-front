import { useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import { Link, useNavigate } from "react-router-dom";
import mappedErrors from "../utils/mappedErrors.js";

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
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-5 bg-zinc-800 max-w-md w-full p-10 rounded-md"
      >
        <h2 className="text-2xl font-bold">Register</h2>
        <div className="space-y-1">
          <input
            className="w-full bg-zinc-700 py-2 rounded-md px-4"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleChange(e)}
          />
          {errors.username ? (
            <p className="text-red-500">{errors.username.join(" and ")}</p>
          ) : (
            ""
          )}
        </div>
        <div className="space-y-1">
          <input
            className="w-full bg-zinc-700 py-2 rounded-md px-4"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          {errors.email ? (
            <p className="text-red-500">{errors.email.join(" and ")}</p>
          ) : (
            ""
          )}
        </div>
        <div className="space-y-1">
          <input
            className="w-full bg-zinc-700 py-2 rounded-md px-4"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          {errors.password ? (
            <p className="text-red-500">{errors.password.join(" and ")}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="bg-sky-500 w-full rounded-md py-2">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link className="text-sky-600" to="/login">
            Sign in
          </Link>{" "}
          to continue
        </p>
      </form>
    </div>
  );
};

export default Register;
