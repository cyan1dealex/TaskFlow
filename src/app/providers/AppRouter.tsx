import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@pages/login-page'
import { RegisterPage } from '@pages/register-page'
import { ProtectedRoute } from './ProtectedRoute'
import { LogoutButton } from '@features/auth'
import { useAuth } from './AuthProvider'
import { useUserProfile } from '@entities/user'

const DashboardPage = () => {
    const { user } = useAuth()

    const { data: profile, isLoading } = useUserProfile(user?.id)

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (!profile) {
        return <div>Профиль не найден</div>
    }

    return (
        <div>
            <h2>Данные профиля</h2>
            <ul>
                <li>ID: {profile?.id}</li>
                <li>Имя: {profile?.username}</li>
                <li>Email: {profile?.email}</li>
                <li>Аватар: {profile?.avatarUrl}</li>
                <li>
                    Дата создания:{' '}
                    {new Date(profile.createdAt).toLocaleString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </li>
            </ul>
            <LogoutButton />
        </div>
    )
}

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/app" element={<DashboardPage />} />
                </Route>

                <Route path="/" element={<Navigate to="/app" replace />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
