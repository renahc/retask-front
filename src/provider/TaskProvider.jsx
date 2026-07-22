import { TaskContext } from "../context/TaskContext";
import {
  fetchDeleteTask,
  fetchUpdateTask,
  getTasks,
  saveTask,
} from "../api/tasks.js";
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

  const deleteTask = async (taskId) => {
    const deleteData = await fetchDeleteTask(taskId);
    const newData = initialTasks.filter((task) => task._id !== taskId);
    setInitialTasks([...newData]);
    setIsLoading(false);

    return deleteData;
  };

  const updateTask = async (task, taskId) => {
    const updateData = await fetchUpdateTask(taskId, task);
    setInitialTasks(
      initialTasks.map((t) => (t._id === taskId ? { ...t, ...task } : t)),
    );
    setIsLoading(false);

    return updateData;
  };

  return (
    <TaskContext.Provider
      value={{ initialTasks, isLoading, createTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
