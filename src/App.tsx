import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

const Todos = (props) => {
    const listItems = props.todos.map((item, index) =>
        <li key={index}>{item}</li>
        )
        return (
            <ul>{listItems}</ul>
        )
}

export const App: React.FC = () => {

    const [todos,setTodos]　= React.useState<string[]>([])
    const [newTodo, setNewTodo] = React.useState<string>()

    const [test, setTest] = React.useState<string>()

    return (
        <div>
            <h1 className={styles.title}>todos</h1>

            <input type="text" 
                value={newTodo}
                onKeyDown={(event)=>{
                    if(event.keyCode===13){
                        setTodos(([...todos, newTodo]))
                    }
                                    }}
                        onChange={(event) =>{
                    setNewTodo(event.target.value)
                }
            }/>
            <p>
                テスト{test}
                
                <Todos todos={todos}/>
            </p>
           
           {/*
            <p>
                <button
                    className={styles.btn}
                    onClick={() => {
                        setSum(japanese + mass + english)
                        {/* 最初は正しく出ない 
                        setRank(sum >= 200 ? 'A' : 'B')
                    }}
                >
                    計算
                </button>
            </p>
            <p>合計 {sum}点　ランク{rank}</p>

                */}

        </div>
    )
}