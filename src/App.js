import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const capitalizeFirstLetter = (string) => {
        string = string.trim();
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const addToDo = (e) => {
        e.preventDefault();
        let sanitizedString = capitalizeFirstLetter(input)
        console.log(`This is the input: ${sanitizedString}`);
        setTodos([...todos, sanitizedString]);
        setInput('');
    };

    return (
        <div className="App">
            <h1>Welcome to my to-do list</h1>
            <form>
                <input
                    type="text"
                    className="input"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
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




/*
The ability to type into an input field and hit the ENTER key to add a TODO to a list of TODO's
Each TODO must automatically be capitalised when added to the list of TODO's

The ability to delete a todo from the todo list
The ability to update a todo from the todo list
There should be a button on each TODO to indicate completion of a TODO, the text should turn green and have a strikethrough once completed
The TODO app should be styled appropriately (you could use Glassmorphism!)
At the top of the page, the client wants an inspirational quote which is different each time the user refreshes the page. The quote should be fetched from the following API: https://type.fit/api/quotes
CHALLENGE: Persist the TODO's so that when the user refreshes the page, the list of TODO's is preserved!
CHALLENGE 2: Add animations to the TODO list using this library!
*/