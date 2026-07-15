import { TaskContext } from "../context/TaskContext";
import { getTasks, saveTask } from "../api/tasks.js";
import { useEffect, useState } from "react";

const TaskProvider = ({ children }) => {
  const [initialTasks, setInitialTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const taskData = await getTasks();

        setInitialTasks(taskData || []);
        setIsLoading(false);

        return taskData;
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const createTask = async (task) => {
    const saveData = await saveTask(task);

    setInitialTasks([...initialTasks, saveData]);
    setIsLoading(false);

    return saveData;
  };

  return (
    <TaskContext.Provider value={{ initialTasks, isLoading, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
