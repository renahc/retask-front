import { Link } from "react-router-dom";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const LoginForm = ({ handleSubmit, handleChange, errors }) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="space-y-5 bg-zinc-800 max-w-md w-full p-10 rounded-md"
    >
      <h2 className="text-2xl font-bold">Login</h2>
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
      <SubmitButton message="Login" />
      <p>
        Don't have an account yet?{" "}
        <Link className="text-sky-600" to="/register">
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
