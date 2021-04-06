import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

type Todo　= {
    todoText: string
    check: boolean
    id: number
}

export const App: React.FC = () => {

    const [todos, setTodos] = React.useState<Todo[]>([])
    const [newTodo, setNewTodo] = React.useState<Todo>({ todoText: '', check: false, id: 0 })

    const [displayTodos, setDisplayTodos] = React.useState<Todo[]>([])

    const [todoCount, setTodoCount] = React.useState<number>(0)
    const [todoStatus, setTodoStatus] = React.useState<string>('all')

    const reversedTodos = [...displayTodos].sort((a,b)=>a.id-b.id)

    return (
        <div>
            <h1 className={styles.title}>todos</h1>
                <p className={styles.center}>
                    <button className={todos.length > 0 ? styles.visible :styles.hidden}
                    onClick={() =>{

                        todos.map((todo:Todo) =>(
                            todo.check=!todo.check
                        ))
                    }}>✔️</button>
                    <input type='text' className={styles.input}
                    value={newTodo.todoText}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            setTodos(([...todos, newTodo]))
                            if(todoStatus !== 'completed'){
                                setDisplayTodos(([...displayTodos, newTodo]))
                            }
                            setNewTodo({ todoText: '', check: false, id: 0 })
                            setTodoCount(todoCount + 1)
                        }
                    }}
                    onChange={(event) => {
                        setNewTodo({ todoText: event.target.value, check: false, id: todos.length })
                    }} />
                </p>
                    
            <ul className={styles.center}>
                {reversedTodos.map((todo: Todo) => (
                    <p key={todo.id}>
                        <input type='checkbox' 
                        defaultChecked={todo.check}
                        onChange={(event) => {
                            todo.check = event.target.checked
                            if (!todo.check) {
                                setTodoCount(todoCount + 1)
                            } else {
                                setTodoCount(todoCount - 1)
                            }}} />
                        <input type='text'
                        defaultValue={todo.todoText}
                        onChange={(event) => {
                            todo.todoText = event.target.value
                        }} />
                        <button
                        className={styles.btn}
                        onClick={()=>{
                            setTodos(todos.filter(item => item.id !== todo.id))
                            setDisplayTodos(displayTodos.filter(item => item.id !== todo.id))
                            setTodoCount(todoCount-1)
                        }}>
                            ×
                        </button>
                    </p>
                ))}
            </ul>
            <p className={styles.center}>
                {todoCount} item left  

                <button 
                className={todoStatus === 'all' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('all')
                    setDisplayTodos(todos)
                }}>
                    All
                </button>
                <button
                className={todoStatus === 'active' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('active')
                    setDisplayTodos(todos.filter(item => item.check !==true))
                }}>
                    Active
                </button>
                <button
                className={todoStatus === 'completed' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('completed')
                    setDisplayTodos(todos.filter(item => item.check !==false))
                }}>
                    Completed
                </button>
                <button className={todos.length > todoCount ? styles.visible : styles.hidden}
                onClick={()=>{
                    setTodos(todos.filter(item => item.check !== true))
                    setDisplayTodos(displayTodos.filter(item => item.check !== true))
                }}>
                    Clear completed
                </button>
            </p>
        </div>
    )
}