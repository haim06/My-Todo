import React, {useState} from 'react'
import './App.css';

// DELETE - use filter function and id
// EDIT BUTTON

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, {
      id: Math.floor(Math.random() * 10000),
      text: input
  }])
    setInput('');
  }
  const deleteTodo = (todoDelete) => () => {
    setTodos(todos.filter(todo => todo.id !== todoDelete));
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='Todo'>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

        {todos.map(todo => (
          <div className='Todo__todoItem'><li>{todo.text}</li>
          <button onClick={deleteTodo(todo.id)}>DELETE</button></div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
