import React from "react";
import { useState } from "react";
import "../components/TodoApp.css";
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || email.trim() === "" || number.trim() === "")
      return;

    addTodo({ text, email, number });

    setText("");
    setEmail("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
