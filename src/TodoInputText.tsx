import React from 'react'
import PropsType from 'prop-types'

import { Todo } from './types'

import styles from './TopInputText.css'

type TodoInputTextProps = {
  todos: Todo[]
  todo: Todo
  onChange: (todos: Todo[]) => void
}

export const TodoInputText: React.FC<TodoInputTextProps> = ({ todos, todo, onChange }) => {
  const handleTextChange = (todo) => (event) => {
    onChange?.([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: event.target.value, check: todo.check, id: todo.id },
    ])
  }
  return <input type="text" className={styles.text} value={todo.todoText} onChange={handleTextChange(todo)} />
}

TodoInputText.propTypes = {
  todos: PropsType.array,
  todo: PropsType.any,
  onChange: PropsType.func,
}
