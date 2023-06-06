import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete }) => {
  const handleDelete = (todo) => {
    onDelete(todo);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Todo todo={todo} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
