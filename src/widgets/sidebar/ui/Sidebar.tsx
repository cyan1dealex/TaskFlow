import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@shared/ui/Button'
import styles from './Sidebar.module.css'
import { useAuth } from '@app/providers/AuthProvider'
import { useUserProfile } from '@entities/user'
import { LogoutButton } from '@features/auth'

const NAV_ITEMS = [
    { path: '/app', label: 'Обзор', icon: '📊' },
    { path: '/boards', label: 'Доски задач', icon: '📋' },
    { path: '/settings', label: 'Настройки', icon: '⚙️' },
]

const STORAGE_KEY = 'taskflow_sidebar_collapsed'

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
        return localStorage.getItem(STORAGE_KEY) === 'true'
    })

    const { user } = useAuth()
    const { data: profile, isLoading } = useUserProfile(user?.id)

    const avatarLetter = profile?.username ? profile.username[0] : 'U'

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, String(isCollapsed))
    }, [isCollapsed])

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev)
    }

    return (
        <aside
            className={`${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : ''}`}
        >
            <div className={styles.profile}>
                <div className={styles.avatar}>{isLoading ? '...' : avatarLetter}</div>

                <div className={styles.userInfo}>
                    <span className={styles.username}>
                        {isLoading ? 'Загрузка...' : profile?.username || 'Без имени'}
                    </span>
                    <span className={styles.email}>{user?.email}</span>
                </div>

                {/* <LogoutButton /> */}
            </div>

            <nav className={styles.navigation}>
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        title={isCollapsed ? item.label : undefined}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.navLinkActive}`
                                : styles.navLink
                        }
                    >
                        <span className={styles.navIcon}>{item.icon}</span>
                        {!isCollapsed && (
                            <span className={styles.navLabel}>{item.label}</span>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className={styles.bottomSection}>
                <Button
                    variant="primary"
                    size="md"
                    title={isCollapsed ? 'Создать доску' : undefined}
                >
                    {isCollapsed ? '+' : '+ Новая доска'}
                </Button>

                <button
                    type="button"
                    onClick={toggleSidebar}
                    className={styles.collapseButton}
                    title={isCollapsed ? 'Развернуть меню' : 'Свернуть меню'}
                >
                    <span
                        className={`${styles.collapseIcon} ${
                            isCollapsed ? styles.collapseIconRotated : ''
                        }`}
                    >
                        ◀
                    </span>
                    {!isCollapsed && <span>Свернуть</span>}
                </button>
            </div>
        </aside>
    )
}
