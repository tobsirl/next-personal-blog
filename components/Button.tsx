import { FC } from 'react'

import styles from './button.module.css'

interface Button {
  variant: string
}


const Button:  FC<Button> = ({ variant }) => {
  return (
    <button className={styles.button}>
      Click me
    </button>
  )
}

export default Button