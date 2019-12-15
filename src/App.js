import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoApp = () => {

    
    function getLocalStorage () {
        let storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            updateTodos(JSON.parse(storedTodos))
        }
    }

    useEffect(() => {
        getLocalStorage();
    }, [])

    const [todo, setTodo] = useState("");
    const [todos, updateTodos] = useState([]);
    useEffect(()=>{
        updateLocalStorage()
    })

    const [error, setError] = useState("")
    useEffect(()=> {
        setTimeout(()=> {
            setError("");
        }, 3000)
    })

    function add () {
        if (todos.includes(todo)) {
            setError("Todo item already exists")
        } else {
            updateTodos([...todos, todo]);   
            setTodo("");
        }
    }

    function remove (item) {
        updateTodos(todos.filter(todo => todo !== item));
    }

    function clearAll () {
        updateTodos([]);
    }

    function updateLocalStorage () {   
        localStorage.setItem("todos", JSON.stringify(todos));
    }
   
    return (
        <div className="App">
      	    <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />            

                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="To do" onChange={e => setTodo(e.target.value)} value={todo} name="todo" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={add} disabled={!todo}>Add</button>
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
                
                {todos.length > 0 && <button className="btn btn-danger" onClick={clearAll}>Clear list</button>}
            </header>
        </div>
    );
}

export default TodoApp;
