import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      setError("Failed to load todos");
    }
  };

  return (
    <div className="container">
      <h1>Todo Manager</h1>
      <TodoForm refresh={loadTodos} />
      <TodoList todos={todos} refresh={loadTodos} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
