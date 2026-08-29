import { Link } from 'react-router-dom'

import styles from './RegisterPage.module.css'
import { RegisterForm } from '@features/Register'

export const RegisterPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.logo}>
                        Task<span className={styles.logoAccent}>Flow</span>
                    </h1>
                    <p className={styles.subtitle}>Создайте аккаунт, чтобы продолжить</p>
                </header>

                <RegisterForm />

                <footer className={styles.footer}>
                    <span className={styles.footerText}>Уже есть аккаунт? </span>
                    <Link to="/login" className={styles.link}>
                        Войти
                    </Link>
                </footer>
            </div>
        </div>
    )
}
