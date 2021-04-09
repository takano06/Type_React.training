import React from 'react'

import { Todo } from './types'

import styles from './TodoList.css'

type TodoListProps = {
  todo: Todo
  onCheckBoxChange?:(checked:boolean) => void
  onTodoTextChange?:(todoText:string) => void
  onDeleteButtonClick?: () => void
}

export const TodoList: React.FC<TodoListProps> = ({ todo, onCheckBoxChange, onTodoTextChange, onDeleteButtonClick }) => {
  const handleCheckboxChange = (todo) => (event) => {
    onCheckBoxChange?.([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: todo.todoText, check: event.target.checked, id: todo.id },
    ])
  }
  const handleListChange = (todo) => (event) => {
    onChange?.([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: event.target.value, check: todo.check, id: todo.id },
    ])
  }
  const handleDeleteButton = (todo) => () => {
    onChange?.(todos.filter((item) => item.id !== todo.id))
  }

  return (
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
  )
}