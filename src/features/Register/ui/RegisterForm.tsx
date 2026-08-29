import React from 'react'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { useForm } from 'react-hook-form'

import { RegisterFormData, registerSchema } from '../model/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './RegisterForm.module.css'

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: 'onTouched',
    })

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit((data) => console.log(data))}
            noValidate
        >
            <Input
                label="Логин"
                placeholder="Username"
                fullWidth
                error={errors.username?.message}
                {...register('username')}
            />

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

            <Input
                label="Подтверждение пароля"
                type="password"
                placeholder="••••••••"
                fullWidth
                error={errors.confirmPassword?.message}
                {...register('confirmPassword')}
            />

            <Button type="submit" size="md" variant="primary" isLoading={isSubmitting}>
                Создать аккаунт
            </Button>
        </form>
    )
}
