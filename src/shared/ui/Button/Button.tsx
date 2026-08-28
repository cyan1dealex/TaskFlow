import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        type = 'button',
        variant = 'primary',
        size = 'md',
        isLoading = false,
        className = '',
        ...restProps
    } = props

    const buttonClasses = [styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={restProps.disabled || isLoading}
            {...restProps}
        >
            {isLoading ? <span>'Загрузка...'</span> : children}
        </button>
    )
}
