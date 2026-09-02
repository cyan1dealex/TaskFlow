import { Input } from '@shared/ui/Input'
import styles from './HeaderSkeleton.module.css'

export const HeaderSkeleton = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <div className={styles.breadcrumbs}>
                    <span>TaskFlow</span>&gt;
                    <span>Профиль</span>
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.searchWrapper}>
                    <Input placeholder="Поиск задач..." fullWidth disabled />
                </div>
            </div>
        </header>
    )
}
