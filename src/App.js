import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {
        'id': nextId(),
        'name': todo,
        'completed': false
      }
    ]);
    setTodo("");
  };
  
  return (
    <div style={{
      
    }}>
      <h1><u>My Todo List</u></h1>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Enter Todo"
      style={{
        border: '1px solid #ccc',
        height: '20px',
        padding: '5px',
      }} />
      <button
      style={{
        marginLeft: '10px',
        height: '35px',
        backgroundColor: '#f4f4f4',
        border: 'none',
        cursor: todo ? 'pointer' : 'not-allowed',
        fontWeight: 'bold',
      }} 
      disabled={!todo}
      onClick={handleSubmit}>Add Todo</button>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
