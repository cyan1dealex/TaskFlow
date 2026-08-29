import { logout } from '@features/auth/api/logout'
import { Button } from '@shared/ui/Button'
import { useState } from 'react'

export const LogoutButton = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        try {
            setIsLoading(true)
            await logout()
        } catch (error) {
            console.error('Ошибка выхода', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Button
                variant="outline"
                size="md"
                onClick={handleLogout}
                isLoading={isLoading}
            >
                Выйти
            </Button>
        </div>
    )
}
