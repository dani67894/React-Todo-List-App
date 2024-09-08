import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, isCompleted: false, isEditing: false }]);
        console.log(todos);
    };
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo
        ))
    }
    // implementation using arrow function 
    const toggleComplete = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };
    // const toggleComplete = function(id) {    //Simple implementation
    //     setTodos(todos.map(function(todo) {
    //         if (todo.id === id) {
    //             return { ...todo, isCompleted: !todo.isCompleted };
    //         } else {
    //             return todo;
    //         }
    //     }));
    // };

    // const deleteTodo = id => {
    //     setTodos(todos.filter(todo => todo.id !== id));
    // };  //creates a new array for the setTodos

    const deleteTodo = id => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos.splice(index, 1)
            setTodos([...todos])
        }
    }
    // const editTodo = id => {    //simple implementation
    //     setTodos(todos.map(function (todo) {
    //         if (todo.id === id) {
    //             return { ...todo, isEditing: !todo.isEditing }
    //         }
    //         else {
    //             return todo
    //         }
    //     }))
    // }
    const editTodo = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ))
    }

    return (
        <div className='container'>
            <h1>Todo Ease</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                todo.isEditing ? (
                    < EditTodoForm editTask={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
            ))}
        </div>
    );
}
