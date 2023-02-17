import { FC } from 'react'

interface Button {
  variant: string
}


const Button:  FC<Button> = ({ variant }) => {
  return (
    <button className={variant}>
      Click me
    </button>
  )
}

export default Button