import React from 'react'
import PropsType from 'prop-types'

import { Todo } from './types'
import { todoNoCheckCount } from './utils'

import styles from './ClearCompletedButton.css'

type ClearCompletedButtonProps = {
  todos: Todo[]
  onChange: (todos: Todo[]) => void
}

export const ClearCompletedButton: React.FC<ClearCompletedButtonProps> = ({ todos, onChange }) => {
  const handleClearButton = () => () => {
    onChange?.(todos.filter((item) => item.check !== true))
  }
  return (
    <button
      className={todos.length > todoNoCheckCount(todos) ? styles.visible : styles.hidden}
      onClick={handleClearButton()}
    >
      Clear completed
    </button>
  )
}

ClearCompletedButton.propTypes = {
  todos: PropsType.array,
  onChange: PropsType.func,
}
