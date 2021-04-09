import React from 'react'

import styles from './App.css'

import { Todo } from './types'
import { todoNoCheckCount } from './utils'

import { CheckboxButton } from './CheckboxButton'
import { TopInputText } from './TopInputText'
import { TodoList } from './TodoList'
import { StatusRadio } from './StatusRadio'
import { StatusLabel } from './StatusLabel'
import { ClearCompletedButton } from './ClearCompletedButton'

export const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [todoStatus, setTodoStatus] = React.useState<string>('All')

  const dpTodos =
    todoStatus === 'All'
      ? [...todos]
      : todoStatus === 'Active'
      ? [...todos].filter((item) => item.check !== true)
      : [...todos].filter((item) => item.check !== false)

  const reversedTodos = [...dpTodos].sort((a, b) => b.id - a.id)

  return (
    <div>
      <h1 className={styles.title}>todos</h1>
      <p className={styles.center}>
        <CheckboxButton todos={todos} onChange={setTodos} />
        <TopInputText todos={todos} onChange={setTodos} />
      </p>
      <TodoList todos={todos} reversedTodos={reversedTodos} onChange={setTodos} />
      <p className={styles.statusLine}>
        {todoNoCheckCount(todos)} item left
        <StatusRadio todoStatus={todoStatus} value="All" onChange={setTodoStatus} />
        <StatusLabel value="All" />
        <StatusRadio todoStatus={todoStatus} value="Active" onChange={setTodoStatus} />
        <StatusLabel value="Active" />
        <StatusRadio todoStatus={todoStatus} value="Complete" onChange={setTodoStatus} />
        <StatusLabel value="Complete" />
        <ClearCompletedButton todos={todos} onChange={setTodos} />
      </p>
    </div>
  )
}
