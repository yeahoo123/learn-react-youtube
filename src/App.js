import './App.css';
import TodoList from './components/TodoList';
import {useState} from 'react'
import TodoForm from './components/TodoForm';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! 😍 ' },
        { id: 2, title: 'We love Easy Frontend! 🥰 ' },
        { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ])
    const handleTodoClick = (todo) => {
        const index = todoList.findIndex(x => x.id === todo.id)
        const newTodoList = todoList.slice()
        newTodoList.splice(index, 1)
        setTodoList(newTodoList)
    }
    const handleTodoFormSubmit = (formValues) => {
        console.log(formValues)
        const newTodo = {
            id: todoList.length+1,
            ...formValues
        }
        const newTodoList = todoList.slice()
        newTodoList.push(newTodo)
        setTodoList(newTodoList)
        
    }
    return (
        <div className="app">
            <h1>Welcome to React Hooks</h1>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default App;
