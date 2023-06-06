import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Todo App</h1>
        <div className="todo-form">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="todo-list">
          <TodoList todos={todos} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
