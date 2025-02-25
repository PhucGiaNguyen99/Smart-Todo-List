import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: todo.completed ? '#d4edda' : '#f8d7da',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text} 
      </span>

      <span style={{ textAlign: 'center', minWidth: '80px', fontWeight: 'bold' }}>
        ({todo.priority})
      </span>

      <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px' }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
