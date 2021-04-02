import React from 'react';


function TodoList({todos, onTodoClick}) {
    const handleTodoClick = (todo) => {
        onTodoClick(todo)
    }
    return (
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id}
                    onClick={()=>handleTodoClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;