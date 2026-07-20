import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const Tasks = ({ initialTasks }) => {
  const { deleteTask } = useTasks();
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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <form className="my-5 px-4 space-y-5">
      {initialTasks.map((task, i) => (
        <ul key={i} className="flex justify-between max-w-md">
          <div className="">
            <input
              onBlur={handleBlur}
              className="font-bold text-xl"
              type="text"
              name="title"
              defaultValue={task.title}
            ></input>
            <input
              onBlur={handleBlur}
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
      <article className="flex max-w-md">
        <div>
          <input
            onBlur={handleBlur}
            className="font-bold text-xl"
            type="text"
            name="title"
          ></input>
          <input onBlur={handleBlur} type="text" name="description" />
        </div>
      </article>
    </form>
  );
};

export default Tasks;
