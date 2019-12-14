import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoApp = () => {

    const [todo, setTodo] = useState({});
    const [todos, pushTodo] = useState([]);

    function add () {
        pushTodo([...todos, todo]);
    }

    function remove (item) {
        pushTodo(todos.filter(todo => todo !== item));
    }
   
    return (
        <div className="App">
      	    <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />            

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="To do" onChange={e => setTodo(e.target.value)} name="todo" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={add}>Add</button>
                    </div>
                </div>

                <ul className="list-display">
                    {todos.map((todo, i) => {
                        return <li key={i}>
                                    {todo} &nbsp;&nbsp;&nbsp;
                                    <button type="button" className="close" aria-label="Close" onClick={()=>remove(todo)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </li>
                    })}
                </ul>
            </header>
        </div>
    );
}

export default TodoApp;
