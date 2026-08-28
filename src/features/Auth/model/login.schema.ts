import z from 'zod'

export type LoginFormData = z.infer<typeof loginSchema>

export const loginSchema = z.object({
    email: z.string().min(1, 'Введите email').email('Некорректный формат email'),
    password: z
        .string()
        .min(1, 'Введите пароль')
        .min(6, 'Пароль должен содержать минимум 6 символов'),
})
