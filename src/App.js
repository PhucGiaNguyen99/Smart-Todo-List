import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ text, priority }) => {
    const priorityValue = priority === 'High' ? 1 : priority === 'Medium' ? 2 : 3;
    const newTodo = { id: Date.now(), text, priority, priorityValue, completed: false }
    setTodos((prevTodos) => [...prevTodos, newTodo].sort((a, b) => a.priorityValue - b.priorityValue));
  };

  const toggleComplete = (id) => {
    console.log('Toggling task with id:', id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const openTodos = totalTodos - completedTodos;

  return (
    <div className="container">
      <h1>React To-Do List</h1>

      <div className="summary-container">
        <p><strong>Total Todos:</strong> {totalTodos}</p>
        <p><strong>Completed:</strong> {completedTodos}</p>
        <p><strong>Open:</strong> {openTodos}</p>
      </div>
      <div className="todo-wrapper">
        <div className="form-container">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="list-container">
          <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
