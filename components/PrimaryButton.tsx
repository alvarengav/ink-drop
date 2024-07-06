import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
  const { className, ...restProps } = props
  return (
    <button className={clsx('btn btn-primary', className)} {...restProps} />
  )
}

export default PrimaryButton
