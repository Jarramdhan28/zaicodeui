import { Link } from 'react-router-dom'
import React from 'react'
import classNames from 'classnames'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring focus:ring-offset-2 transition-colors duration-200'

  const variantStyles: Record<string, string> = {
    primary:
      'bg-black border border-black text-white hover:bg-black/80 focus:ring-yellowe-500',
    outline:
      'border border-gray-200 text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  }

  const sizeStyles: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  const combinedClass = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
