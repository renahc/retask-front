const LogoutButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="bg-red-500">
      Logout
    </button>
  );
};

export default LogoutButton;
