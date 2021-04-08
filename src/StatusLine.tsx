import React from 'react'

import { Todo } from './types'
import { todoNoCheckCount } from './utils'

import styles from './StatusLine.css'

import { StatusRadio } from './StatusRadio'
import { StatusLabel } from './StatusLabel'
import { ClearCompletedButton } from './ClearCompletedButton'

type StatusLineProps = {
  todos: Todo[]
  todoStatus: string
  onChangeTodos: (todos: Todo[]) => void
  onChangeStatus: (todoStatus: string) => void
}

export const StatusLine: React.FC<StatusLineProps> = ({ todos, todoStatus, onChangeTodos, onChangeStatus }) => {
  return (
    <p className={styles.statusLine}>
      {todoNoCheckCount(todos)} item left
      <StatusRadio todoStatus={todoStatus} value="All" onChange={onChangeStatus} />
      <StatusLabel value="All" />
      <StatusRadio todoStatus={todoStatus} value="Active" onChange={onChangeStatus} />
      <StatusLabel value="Active" />
      <StatusRadio todoStatus={todoStatus} value="Complete" onChange={onChangeStatus} />
      <StatusLabel value="Complete" />
      <ClearCompletedButton todos={todos} onChange={onChangeTodos} />
    </p>
  )
}
