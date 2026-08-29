import { useForm } from 'react-hook-form'
import { supabase } from '@shared/api'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { LoginFormData, loginSchema } from '@features/auth/model/login.schema'

import styles from './LoginForm.module.css'

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema), mode: 'onTouched' })

    const onSubmit = async (formData: LoginFormData) => {
        const { email, password } = formData

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError('email', {
                type: 'server',
                message: error.message,
            })
            return
        }

        console.log('Пользователь успешно залогинился:', data.user)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
