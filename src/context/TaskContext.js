import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
