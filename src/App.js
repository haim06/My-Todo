import React, {useState} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

        {todos.map(todo => (
          <li>{todo}</li>
        ))}
    </div>
  );
}

export default App;
