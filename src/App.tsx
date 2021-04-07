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

    const [listTodo, setListTodo] = React.useState<Todo>({ todoText: '', check: false, id: 0 })

    const [todoStatus, setTodoStatus] = React.useState<string>('all')

    const dpTodos = (todoStatus === 'all' ? [...todos] : todoStatus === 'active' ? ([...todos].filter((item => item.check !==true))) : ([...todos].filter((item => item.check !==false))))

    const reversedTodos = [...dpTodos].sort((a,b)=>b.id-a.id)

    const todoNoCheckCount = (ts) => {
        let cnt = 0;
        for(let t of ts){
            if(!t.check){
                cnt++
            }
        }
        return cnt
    }
    return (
        <div>
            <h1 className={styles.title}>todos</h1>
                <p className={styles.center}>
                    <button className={todos.length > 0 ? styles.visible :styles.hidden}
                    onClick={() =>{
                        if(todoNoCheckCount(todos) > 0){
                            setTodos(todos.map((todo:Todo) => ({todoText: todo.todoText, check: true, id: todo.id})))
                            console.log(todos)

                        }else{
                            setTodos(todos.map((todo:Todo) =>({todoText: todo.todoText, check: !todo.check, id: todo.id})))
                            console.log(todos)
                        }

                    }}>✔️</button>
                    <input type='text' className={styles.input}
                    value={newTodo.todoText}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            setTodos(([...todos, newTodo]))
                            if(todoStatus !== 'completed'){
                            }
                            setNewTodo({ todoText: '', check: false, id: 0 })
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
                        checked={todo.check}
                        onChange={(event) => {
                            setTodos([...todos.filter(item => (item.id !== todo.id)),{todoText:todo.todoText, check:event.target.checked, id:todo.id}])
                            console.log(todos)
                            }} />
                        <input type='text'
                        value={todo.todoText}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                setTodos([...todos.filter(item => (item.id !== todo.id)),listTodo])
                            }
                        }}
                        onChange={(event) => {
                            todo.todoText=event.target.value
                            setListTodo({todoText:event.target.value, check:todo.check, id:todo.id})
                        }} />
                        <button
                        className={styles.deleteBtn}
                        onClick={()=>{
                            setTodos(todos.filter(item => item.id !== todo.id))
                        }}>
                            ×
                        </button>
                    </p>
                ))}
            </ul>
            <p className={styles.center}>
                {todoNoCheckCount(todos)} item left  

                <button 
                className={todoStatus === 'all' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('all')
                }}>
                    All
                </button>
                <button
                className={todoStatus === 'active' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('active')
                }}>
                    Active
                </button>
                <button
                className={todoStatus === 'completed' ? styles.sttsActive : styles.notSttsActive}
                onClick={()=>{
                    setTodoStatus('completed')
                }}>
                    Completed
                </button>
                <button className={todos.length > todoNoCheckCount(todos) ? styles.visible : styles.hidden}
                onClick={()=>{
                    setTodos(todos.filter(item => item.check !== true))
                }}>
                    Clear completed
                </button>
            </p>
        </div>
    )
}