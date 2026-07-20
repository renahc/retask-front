const SubmitButton = ({ message }) => {
  return (
    <button type="submit" className="bg-sky-500 w-full rounded-md py-2">
      {message}
    </button>
  );
};

export default SubmitButton;
