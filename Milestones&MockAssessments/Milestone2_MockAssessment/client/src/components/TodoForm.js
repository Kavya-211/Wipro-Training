import React, { useState } from "react";
import { addTodo } from "../services/api";
import Button from "./Button";

function TodoForm({ refresh }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await addTodo({ title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button text="Add" />
    </form>
  );
}

export default TodoForm;
