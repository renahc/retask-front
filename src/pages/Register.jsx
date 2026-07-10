import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length === 0);

    const user = {
      username,
      email,
      password,
    };

    console.log(user);
  };

  const handleChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-zinc-800 max-w-md p-8 space-y-4 rounded-md"
      >
        <h2 className="text-2xl font-bold">Register</h2>
        <input
          className="w-full bg-zinc-700 py-2 rounded-md px-4"
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => handleChange(e)}
          required
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
