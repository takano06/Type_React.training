import React from 'react'
import PropsType from 'prop-types'

import { Todo } from './types'
import { todoNoCheckCount } from './utils'

import styles from './CheckboxButton.css'

type CheckboxButtonProps = {
  todos: Todo[]
  onChange?: (todos: Todo[]) => void
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({ todos, onChange }) => {
  const handleAllCheckButton = () => () => {
    if (todoNoCheckCount(todos) > 0) {
      onChange?.(todos.map((todo: Todo) => ({ todoText: todo.todoText, check: true, id: todo.id })))
    } else {
      onChange?.(todos.map((todo: Todo) => ({ todoText: todo.todoText, check: !todo.check, id: todo.id })))
    }
  }

  return (
    <button className={todos.length > 0 ? styles.visible : styles.hidden} onClick={handleAllCheckButton()}>
      ✔️
    </button>
  )
}

CheckboxButton.propTypes = {
  todos: PropsType.array,
  onChange: PropsType.func,
}
