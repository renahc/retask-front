import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const Tasks = ({ initialTasks }) => {
  const { deleteTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleClick = async (taskId) => {
    try {
      await deleteTask(taskId);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlur = async (taskId, e) => {
    const { name, value } = e.target;
    if (!value.trim()) return; // ❌ No guardar si está vacío

    await updateTask({ [name]: value }, taskId);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="my-5 px-4 space-y-5">
      {initialTasks.map((task, i) => (
        <ul key={i} className="flex justify-between max-w-md">
          <div className="">
            <input
              onBlur={(e) => handleBlur(task._id, e)}
              className="font-bold text-xl"
              type="text"
              name="title"
              defaultValue={task.title}
            ></input>
            <input
              onBlur={(e) => handleBlur(task._id, e)}
              type="text"
              name="description"
              defaultValue={task.description}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-red-400"
              onClick={() => handleClick(task._id)}
            >
              Delete
            </button>
          </div>
        </ul>
      ))}
    </form>
  );
};

export default Tasks;
