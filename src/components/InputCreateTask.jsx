import { useState } from "react";
import Input from "../components/Input";

const InputCreateTask = ({ createTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(task);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />
      <button className="bg-green-500">Create</button>
    </form>
  );
};

export default InputCreateTask;
