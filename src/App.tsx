import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

interface Todo  {
    todoText:string
    check:boolean
    id:number
}

export const App: React.FC = () => {

    const [todos,setTodos]　= React.useState<Todo[]>([])
    const [newTodo, setNewTodo] = React.useState<Todo>()

    const [count, setCount]=React.useState<number>(0)

    var SetCount = (c) => {
        for(let i of todos){
            if(!i.check){
                setCount(count+1)
            }
        }
    }

    return (
        <div>
            <h1 className={styles.title}>todos</h1>

            <input type="text" 
                value={newTodo.todoText}
                onKeyDown={(event)=>{
                    if(event.keyCode===13){
                        setTodos(([...todos, newTodo]))
                        setNewTodo({todoText:"", check:false, id:0})
                    }
                }}
                onChange={(event) =>{
                    setNewTodo({todoText:event.target.value, check:false, id:todos.length})
                }
            }/>

            <ul>
                {todos.map((todo:Todo) => (
                    <p>
                        <input type="checkbox" key={todo.id} 
                            onChange={(event) =>{
                                todo.check=event.target.checked
                                SetCount(todos)
                            }}/>
                        <input type="text" key={todo.id} 
                        value={todo.todoText}
                        onChange={(event) =>{
                            todo.todoText=event.target.value
                        }}/>
                    </p>
                ))}
            </ul>
            <p>
                {count} item left
            </p>
        </div>
    )
}