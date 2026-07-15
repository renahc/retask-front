import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { initialTasks, isLoading } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useTasks();
  const { logout } = useAuth();

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (!initialTasks || initialTasks.length === 0) {
    return <div>No tasks found.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const task = {
        title,
        description,
        status: false,
      };

      const data = await createTask(task);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
  };

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
    <div>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="description"
            placeholder="Description"
          />
          <button type="submit">Guardar</button>
        </form>
      </section>

      <section>
        {initialTasks.map((task, i) => (
          <ul key={i}>
            <li>Title: {task.title}</li>
            <li>Description: {task.description}</li>
          </ul>
        ))}
      </section>

      <section>
        <button onClick={handleClick} className="bg-red-500">
          Logout
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
