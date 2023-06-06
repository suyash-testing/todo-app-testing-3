import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      return;
    }
    addTodo({
      title: title.trim(),
      description: description.trim(),
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
