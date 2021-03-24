import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*

The ability to type into an input field and hit the ENTER key to add a TODO to a list of TODO's
The ability to delete a todo from the todo list
The ability to update a todo from the todo list
Each TODO must automatically be capitalised when added to the list of TODO's
There should be a button on each TODO to indicate completion of a TODO, the text should turn green and have a strikethrough once completed
The TODO app should be styled appropriately (you could use Glassmorphism!)
At the top of the page, the client wants an inspirational quote which is different each time the user refreshes the page. The quote should be fetched from the following API: https://type.fit/api/quotes
CHALLENGE: Persist the TODO's so that when the user refreshes the page, the list of TODO's is preserved!
CHALLENGE 2: Add animations to the TODO list using this library!

*/