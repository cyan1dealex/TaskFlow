import React from 'react'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { useForm } from 'react-hook-form'

import { LoginFormData, loginSchema } from '../model/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './LoginForm.module.css'

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema), mode: 'onTouched' })

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit((data) => console.log(data))}
            noValidate
        >
            <Input
                label="Email"
                type="email"
                placeholder="name@example.com"
                fullWidth
                error={errors.email?.message}
                {...register('email')}
            />

            <Input
                label="Пароль"
                type="password"
                placeholder="••••••••"
                fullWidth
                error={errors.password?.message}
                {...register('password')}
            />

            <Button type="submit" size="md" variant="primary" isLoading={isSubmitting}>
                Войти
            </Button>
        </form>
    )
}
