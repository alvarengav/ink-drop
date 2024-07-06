import { clsx } from 'clsx'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = props => {
  const { className, ...restProps } = props

  return (
    <input
      className={clsx(
        'rounded-md border border-gray-700 bg-dark-300 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green',
        className
      )}
      {...restProps}
    />
  )
}

export default Input
