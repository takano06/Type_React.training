import React from 'react'
import PropsType from 'prop-types'

import { Todo } from './types'

import styles from './TopInputText.css'

type TopInputTextProps = {
  todos: Todo[]
  onChange?: (todos: Todo[]) => void
}

export const TopInputText: React.FC<TopInputTextProps> = ({ todos, onChange }) => {
  const [newTodo, setNewTodo] = React.useState<Todo>({ todoText: '', check: false, id: 0 })

  const handleTopInputChange = () => (event) => {
    setNewTodo({ todoText: event.target.value, check: false, id: todos.length })
  }
  const handleKeyDown = () => (event) => {
    if (event.keyCode === 13) {
      onChange?.([...todos, newTodo])
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

TopInputText.propTypes = {
  todos: PropsType.array,
  onChange: PropsType.func,
}
