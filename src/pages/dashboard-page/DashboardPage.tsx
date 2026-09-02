import { useAuth } from '@app/providers/AuthProvider'
import { useUserProfile } from '@entities/user'
import { LogoutButton } from '@features/auth'

export const DashboardPage = () => {
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
