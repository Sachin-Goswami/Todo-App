import React, { useState } from "react";
import "../components/TodoApp.css";

const TodoItem = ({ index, todo, todos, updateTodos, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [email, setEmail] = useState(todo.email || "");
  const [number, setNumber] = useState(todo.number || "");

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditedText(todo.text);
      setEmail(todo.email || "");
      setNumber(todo.number || "");
    }
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index].text = editedText;
      updatedTodos[index].email = email;
      updatedTodos[index].number = number;
      updateTodos(updatedTodos);
      setIsEditing(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <li className="todo-item">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <>
            <p>Name: {todo.text}</p>
            <p>Email: {todo.email}</p>
            <p>Number: {todo.number}</p>
          </>
        )}
      </div>
      <div className="input-container">
        {isEditing ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="number"
              placeholder="Number"
              value={number}
              onChange={handleNumberChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <>
            <button onClick={handleEditToggle}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
