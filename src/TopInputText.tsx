import React from 'react'

import { Todo } from './types'

import styles from './TopInputText.css'

type TopInputTextProps = {
  todos: Todo[]
  todoStatus: string
  onChange?: (todos: Todo[]) => void
}

export const TopInputText: React.FC<TopInputTextProps> = ({ todos, todoStatus, onChange }) => {
  const [newTodo, setNewTodo] = React.useState<Todo>({ todoText: '', check: false, id: 0 })

  const handleTopInputChange = () => (event) => {
    setNewTodo({ todoText: event.target.value, check: false, id: todos.length })
  }
  const handleKeyDown = () => (event) => {
    if (event.keyCode === 13) {
      onChange?.([...todos, newTodo])
      if (todoStatus !== 'completed') {
      }
      setNewTodo({ todoText: '', check: false, id: 0 })
    }
  }
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="What needs to b done?"
      value={newTodo.todoText}
      onKeyDown={handleKeyDown()}
      onChange={handleTopInputChange()}
    />
  )
}
