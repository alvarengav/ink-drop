import { clsx } from 'clsx'
import React, { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = props => {
  const { className, ...restProps } = props
  return (
    <textarea
      className={clsx(
        'rounded-md border border-gray-700 bg-dark-300 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green',
        className
      )}
      {...restProps}
    />
  )
}

export default Textarea
