const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      className="w-full bg-zinc-700 py-2 rounded-md px-4"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
