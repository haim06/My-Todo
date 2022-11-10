import React, {useState} from 'react'
import './App.css';

// DELETE - use filter function and id
// EDIT BUTTON

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, input])
    setInput('');
  }
  const deleteTodo = (todoDelete) => () => {
    setTodos(todos.filter(todo => todo !== todoDelete));
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='Todo'>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

        {todos.map(todo => (
          <div className='Todo__todoItem'><li>{todo}</li>
          <button onClick={deleteTodo(todo)}>DELETE</button></div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
