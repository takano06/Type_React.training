import React from 'react'
import PropsType from 'prop-types'

import styles from './StatusRadio.css'

type StatusRadioProps = {
  todoStatus: string
  value: string
  onChange: (todoStatus) => void
}
export const StatusRadio: React.FC<StatusRadioProps> = ({ todoStatus, value, onChange }) => {
  const handleStatusRadio = () => (event) => {
    onChange?.(event.target.value)
  }
  return (
    <input
      type="radio"
      className={styles.radioBtn}
      name="status"
      id={value}
      value={value}
      onChange={handleStatusRadio()}
      checked={todoStatus === value}
    />
  )
}

StatusRadio.propTypes = {
  todoStatus: PropsType.string,
  value: PropsType.string,
  onChange: PropsType.func,
}
