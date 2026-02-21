
import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../services/api";
import Button from "./Button";

function TodoItem({ todo, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    refresh();
  };

  const handleUpdate = async () => {
    await updateTodo(todo.id, { title: newTitle });
    setIsEditing(false);
    refresh();
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button text="Save" onClick={handleUpdate} />
        </>
      ) : (
        <>
          {todo.title}
          <Button text="Edit" onClick={() => setIsEditing(true)} />
        </>
      )}
      <Button text="Delete" onClick={handleDelete} />
    </li>
  );
}

export default TodoItem;
