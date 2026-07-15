const API_URL = "http://localhost:3000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();

  return data;
};

export const saveTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();

  return data;
};
