import React, { InputHTMLAttributes, useId } from 'react'
import styles from './Input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    fullWidth?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        type = 'text',
        label,
        error,
        fullWidth = false,
        id,
        className = '',
        disabled,
        ...restProps
    } = props

    const inputId = id || useId()

    const containerClasses = [styles.container, fullWidth && styles.fullWidth, className]
        .filter(Boolean)
        .join(' ')
    const inputClasses = [styles.input, error && styles.invalid].filter(Boolean).join(' ')

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}

            <input
                ref={ref}
                type={type}
                id={inputId}
                className={inputClasses}
                disabled={disabled}
                {...restProps}
            />

            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    )
})
