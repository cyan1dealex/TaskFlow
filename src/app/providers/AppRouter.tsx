import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@pages/login-page'
import { RegisterPage } from '@pages/register-page'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path="/register" element={<RegisterPage />} />

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
