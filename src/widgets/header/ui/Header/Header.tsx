import { Input } from '@shared/ui/Input'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <div className={styles.breadcrumbs}>
                    <span>TaskFlow</span>&gt;
                    <span className={styles.isActive}>Профиль</span>
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.searchWrapper}>
                    <Input placeholder="Поиск..." fullWidth />
                </div>
            </div>
        </header>
    )
}
