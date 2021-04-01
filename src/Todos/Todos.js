import React from 'react';
import './Todos.css';

const Todos = ({ todos, todo, updateTodos }) => {

    const deleteTodo = () => {
        updateTodos(() => {
            const updatedTodos = todos.filter((item) => item !== todo);
            console.log(updatedTodos)
            return updatedTodos;
        });
    };

    const editTodo = () => {

    }


    return (
        <div className="todos">
            <p className="todos__todoText">{todo}</p>
            <button className="todos__button" onClick={editTodo}>
                Edit
            </button>
            <button className="todos__button" onClick={deleteTodo}>
                Delete
            </button>
        </div>
    );
};

export default Todos;
