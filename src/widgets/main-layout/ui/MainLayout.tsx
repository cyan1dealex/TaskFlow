import { Outlet } from 'react-router-dom'
import { Sidebar } from '@widgets/sidebar'
import { Header } from '@widgets/header'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />

            <div className={styles.mainWrapper}>
                <main className={styles.content}>
                    <Header />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
