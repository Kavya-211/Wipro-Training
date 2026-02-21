
const express = require("express");
const router = express.Router();

let todos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn Express", completed: false }
];

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// ADD todo
router.post("/", (req, res) => {
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//  EDIT todo
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;

  todos = todos.map(todo =>
    todo.id === id ? { ...todo, title } : todo
  );

  res.json({ message: "Todo updated" });
});

// DELETE todo
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
