import { useTasks } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";
import Tasks from "../components/Tasks";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  const { initialTasks, isLoading } = useTasks();

  const { logout } = useAuth();

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  const handleClick = async () => {
    try {
      const data = await logout();
      console.log(data);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {!initialTasks || initialTasks.length === 0 ? (
        <div>No tasks found.</div>
      ) : (
        <Tasks initialTasks={initialTasks} />
      )}

      <article>
        <LogoutButton handleClick={handleClick} />
      </article>
    </section>
  );
};

export default Dashboard;
