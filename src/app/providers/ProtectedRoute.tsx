import { useAuth } from './AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return (
            <div>
                <span>ЗАГРУЗКА</span>
            </div>
        )
    }

    if (!user) {
        return <Navigate replace to="/login" />
    }

    return <Outlet />
}
