import { Link } from "react-router-dom";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const RegisterForm = ({ handleSubmit, handleChange, errors }) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="space-y-5 bg-zinc-800 max-w-md w-full p-10 rounded-md"
    >
      <h2 className="text-2xl font-bold">Register</h2>
      <div className="space-y-1">
        <Input
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
        <Input
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
        <Input
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
      <SubmitButton message="Register" />
      <p>
        Already have an account?{" "}
        <Link className="text-sky-600" to="/login">
          Sign in
        </Link>{" "}
        to continue
      </p>
    </form>
  );
};

export default RegisterForm;
