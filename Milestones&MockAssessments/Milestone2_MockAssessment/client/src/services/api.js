
const BASE_URL = "/api/todos";

export const getTodos = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTodo = async (todo) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
  });
};

export const updateTodo = async (id, updatedTodo) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo)
  });
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};

