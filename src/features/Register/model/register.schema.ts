import z from 'zod'

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(3, 'Имя пользователя должно содержать минимум 3 символа'),
        email: z.string().min(1, 'Введите email').email('Некорректный формат email'),
        password: z
            .string()
            .min(1, 'Введите пароль')
            .min(6, 'Пароль должен содержать минимум 6 символов'),
        confirmPassword: z.string().min(1, 'Повторите пароль'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
    })

export type RegisterFormData = z.infer<typeof registerSchema>
