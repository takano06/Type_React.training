import React from 'react'
import PropsType from 'prop-types'

import { Todo } from './types'

type TodoCheckBoxProps = {
  todos: Todo[]
  todo: Todo
  onChange: (todos: Todo[]) => void
}

export const TodoCheckBox: React.FC<TodoCheckBoxProps> = ({ todos, todo, onChange }) => {
  const handleCheckboxChange = (todo) => (event) => {
    onChange?.([
      ...todos.filter((item) => item.id !== todo.id),
      { todoText: todo.todoText, check: event.target.checked, id: todo.id },
    ])
  }
  return <input type="checkbox" checked={todo.check} onChange={handleCheckboxChange(todo)} />
}

TodoCheckBox.propTypes = {
  todos: PropsType.array,
  todo: PropsType.any,
  onChange: PropsType.func,
}
