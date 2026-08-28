import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import z from 'zod'

import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import styles from './LoginPage.module.css'
import { zodResolver } from '@hookform/resolvers/zod'

export type LoginForm = z.infer<typeof loginSchema>

const loginSchema = z.object({
    email: z.string().min(1, 'Введите email').email('Некорректный формат email'),
    password: z
        .string()
        .min(1, 'Введите пароль')
        .min(6, 'Пароль должен содержать минимум 6 символов'),
})

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginForm>({ resolver: zodResolver(loginSchema), mode: 'onTouched' })

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.logo}>
                        Task<span className={styles.logoAccent}>Flow</span>
                    </h1>
                    <p className={styles.subtitle}>Войдите в аккаунт, чтобы продолжить</p>
                </header>

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

                    <Button
                        type="submit"
                        size="md"
                        variant="primary"
                        isLoading={isSubmitting}
                    >
                        Войти
                    </Button>
                </form>

                <footer className={styles.footer}>
                    <span className={styles.footerText}>Нет аккаунта? </span>
                    <Link to="/register" className={styles.link}>
                        Зарегистрироваться
                    </Link>
                </footer>
            </div>
        </div>
    )
}
