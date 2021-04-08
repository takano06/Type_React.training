import React from 'react'

import styles from './StatusLabel.css'

type StatusLabelProps = {
  value: string
}

export const StatusLabel: React.FC<StatusLabelProps> = ({ value }) => {
  return (
    <label htmlFor={value} className={styles.statusLabel}>
      {value}
    </label>
  )
}
