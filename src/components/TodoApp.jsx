import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItems";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ text, email, number }) => {
    setTodos([...todos, { id: Date.now(), text, email, number }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            todos={todos}
            updateTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
