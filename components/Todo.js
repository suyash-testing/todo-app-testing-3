import React from 'react';

const Todo = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      {/* FIXME:  onClick={handleDelete}*/}
      <button onClick={handleDelete}>Delete</button> 
    </div>
  );
};

export default Todo;
