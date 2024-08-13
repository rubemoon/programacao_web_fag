import React, { useState } from 'react'
import './style.css'

type TodoProps = {
    completed: boolean
    id: number
    title: string
}

const TodoLists = () => {
    const [getTodos, setTodos] = useState<TodoProps[]>([
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: false },
        { id: 3, title: 'Todo 3', completed: false },
        { id: 4, title: 'Todo 4', completed: false },
        { id: 5, title: 'Todo 5', completed: false },
        { id: 6, title: 'Todo 6', completed: false },
        { id: 7, title: 'Todo 7', completed: false },
        { id: 8, title: 'Todo 8', completed: false },
        { id: 9, title: 'Todo 9', completed: false },
        { id: 10, title: 'Todo 10', completed: false },
    ])

    const todoFinish = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    return (
        <div>
            <h1>Todo Lists</h1>
            <ul>
                {getTodos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => todoFinish(todo.id)}
                            id={`todo-${todo.id}`}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoLists