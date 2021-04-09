import React from 'react'

import { Todo } from './types'

import styles from './TodoDeleteButton.css'

type TodoDeleteButtonProps = {
  todos: Todo[]
  todo: Todo
  onChange: (todos: Todo[]) => void
}

export const TodoDeleteButton: React.FC<TodoDeleteButtonProps> = ({ todos, todo, onChange }) => {
  const handleDeleteButton = (todo) => () => {
    onChange?.(todos.filter((item) => item.id !== todo.id))
  }
  return (
    <button className={styles.deleteBtn} onClick={handleDeleteButton(todo)}>
      ×
    </button>
  )
}
