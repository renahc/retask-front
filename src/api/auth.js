const API_URL = "http://localhost:3000/api";

export const registerUser = async (user) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();

  return data;
};

export const loginUser = async (user) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();

  return data;
};

export const verifySession = async () => {
  const res = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData);
  }

  const data = await res.json();

  return data;
};
