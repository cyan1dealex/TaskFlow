import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@pages/login-page'
import { RegisterPage } from '@pages/register-page'
import { ProtectedRoute } from './ProtectedRoute'
import { LogoutButton } from '@features/auth'

const DashboardPage = () => (
    <div>
        Личный кабинет / Главная доска
        <LogoutButton />
    </div>
)

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
