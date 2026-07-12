import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return <div>Welcome {user.user.username}</div>;
};

export default Dashboard;
