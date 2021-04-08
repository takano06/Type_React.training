import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

type Todo = {
  todoText: string
  check: boolean
  id: number
}
const todoNoCheckCount = (ts) => {
  let cnt = 0
  for (let t of ts) {
    if (!t.check) {
      cnt++
    }
  }
  return cnt
}

export const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [newTodo, setNewTodo] = React.useState<Todo>({ todoText: '', check: false, id: 0 })

  const [todoStatus, setTodoStatus] = React.useState<string>('all')

  const dpTodos =
    todoStatus === 'all'
      ? [...todos]
      : todoStatus === 'active'
      ? [...todos].filter((item) => item.check !== true)
      : [...todos].filter((item) => item.check !== false)

  const reversedTodos = [...dpTodos].sort((a, b) => b.id - a.id)

  const handleAllCheckButton = () => () => {
    if (todoNoCheckCount(todos) > 0) {
      setTodos(todos.map((todo: Todo) => ({ todoText: todo.todoText, check: true, id: todo.id })))
    } else {
      setTodos(todos.map((todo: Todo) => ({ todoText: todo.todoText, check: !todo.check, id: todo.id })))
    }
  }
  const handleCheckboxChange = (todo) => (event) => {
    setTodos([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: todo.todoText, check: event.target.checked, id: todo.id },
    ])
  }
  const handleTopInputChange = () => (event) => {
    setNewTodo({ todoText: event.target.value, check: false, id: todos.length })
  }
  const handleKeyDown = () => (event) => {
    if (event.keyCode === 13) {
      setTodos([...todos, newTodo])
      if (todoStatus !== 'completed') {
      }
      setNewTodo({ todoText: '', check: false, id: 0 })
    }
  }
  const handleListChange = (todo) => (event) => {
    setTodos([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: event.target.value, check: todo.check, id: todo.id },
    ])
  }
  const handleDeleteButton = (todo) => () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }
  const handleStatusButton = (stts) => () => {
    setTodoStatus(stts)
  }
  const handleClearButton = () => () => {
    setTodos(todos.filter((item) => item.check !== true))
  }

  const handleStatusRadio = () => (event) => {
    setTodoStatus(event.target.value)
  }

  return (
    <div>
      <h1 className={styles.title}>todos</h1>
      <p className={styles.center}>
        <button className={todos.length > 0 ? styles.visible : styles.hidden} onClick={handleAllCheckButton()}>
          ✔️
        </button>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to b done?"
          value={newTodo.todoText}
          onKeyDown={handleKeyDown()}
          onChange={handleTopInputChange()}
        />
      </p>
      <ul className={styles.center}>
        {reversedTodos.map((todo: Todo) => (
          <p key={todo.id}>
            <input type="checkbox" checked={todo.check} onChange={handleCheckboxChange(todo)} />
            <input type="text" className={styles.list} value={todo.todoText} onChange={handleListChange(todo)} />
            <button className={styles.deleteBtn} onClick={handleDeleteButton(todo)}>
              ×
            </button>
          </p>
        ))}
      </ul>
      <p className={styles.statusLine}>
        {todoNoCheckCount(todos)} item left
          <input
            type="radio"
            className={styles.radioBtn}
            name="status"
            id="all"
            value="all"
            onChange={handleStatusRadio()}
            checked={todoStatus === 'all'}
          />{' '}
        <label htmlFor="all" className={styles.statusLabel}>
          All
        </label>
          <input
            type="radio"
            className={styles.radioBtn}
            name="status"
            id="active"
            value="active"
            onChange={handleStatusRadio()}
            checked={todoStatus === 'active'}
          />{' '}
          <label htmlFor="active" className={styles.statusLabel}>
          Active
        </label>
          <input
            type="radio"
            className={styles.radioBtn}
            name="status"
            id="completed"
            value="completed"
            onChange={handleStatusRadio()}
            checked={todoStatus === 'completed'}
          />
          <label htmlFor="completed" className={styles.statusLabel}>
          Completed
        </label>
        <button
          className={todos.length > todoNoCheckCount(todos) ? styles.visible : styles.hidden}
          onClick={handleClearButton()}
        >
          Clear completed
        </button>
      </p>
    </div>
  )
}
