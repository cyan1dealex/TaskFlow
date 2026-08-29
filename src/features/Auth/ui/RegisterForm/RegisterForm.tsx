import React from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '@shared/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormData, registerSchema } from '@features/auth/model/register.schema'

import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'

import styles from './RegisterForm.module.css'

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: 'onTouched',
    })

    const onSubmit = async (formData: RegisterFormData) => {
        const { email, password, username } = formData

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                },
            },
        })

        if (error) {
            setError('email', {
                type: 'server',
                message: error.message,
            })
            return
        }

        console.log('Пользователь успешно зарегистрирован:', data.user)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
