import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addToDo = (e) => {
        e.preventDefault();
        console.log(`This is the input: ${input}`);
        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <div className="App">
            <h1>Welcome to my to-do list</h1>
            <form>
                <input
                    type="text"
                    className="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button type="submit" className="button" onClick={addToDo}>
                    Add to do
                </button>
            </form>
            <h2>List of todos:</h2>
            {todos.map((todo) => (
                <p>{todo}</p>
            ))}
        </div>
    );
}

export default App;
