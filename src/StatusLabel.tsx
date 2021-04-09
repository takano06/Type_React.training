import React from 'react'
import PropsType from 'prop-types'

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

StatusLabel.propTypes = {
  value: PropsType.string,
}
