import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

interface Todo {
    todoText: string
    check: boolean
    id: number
}

export const App: React.FC = () => {

    const [todos, setTodos] = React.useState<Todo[]>([])
    const [newTodo, setNewTodo] = React.useState<Todo>({ todoText: "", check: false, id: 0 })

    const [todoCount, setTodoCount] = React.useState<number>(0)

    return (
        <div>
            <h1 className={styles.title}>todos</h1>
                <p className={styles.center}>
                    <input type="text" className={styles.input}
                        value={newTodo.todoText}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                setTodos(([...todos, newTodo]))
                                setNewTodo({ todoText: "", check: false, id: 0 })
                                setTodoCount(todoCount + 1)
                            }
                        }}
                        onChange={(event) => {
                            setNewTodo({ todoText: event.target.value, check: false, id: todos.length })
                        }
                    } />
                </p>

            <ul className={styles.center}>
                {todos.map((todo: Todo) => (
                    <p>
                        <input type="checkbox" key={todo.id}
                            onChange={(event) => {
                                todo.check = event.target.checked
                                if (!todo.check) {
                                    setTodoCount(todoCount + 1)
                                } else {
                                    setTodoCount(todoCount - 1)
                                }
                            }} />
                        <input type="text" key={todo.id}
                            value={todo.todoText}
                            onChange={(event) => {
                                todo.todoText = event.target.value
                            }} />
                        <button
                            className={styles.btn}
                            onClick={()=>{
                                setTodos(todos.filter(item => item.id !== todo.id))
                                setTodoCount(todoCount-1)
                            }}>
                                ×
                        </button>
                    </p>
                ))}
            </ul>
            <p>
                {todoCount} item left

            </p>
        </div>
    )
}