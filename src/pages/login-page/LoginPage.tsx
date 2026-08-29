import { Link } from 'react-router-dom'

import styles from './LoginPage.module.css'
import { LoginForm } from '@features/auth'

export const LoginPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.logo}>
                        Task<span className={styles.logoAccent}>Flow</span>
                    </h1>
                    <p className={styles.subtitle}>Войдите в аккаунт, чтобы продолжить</p>
                </header>

                <LoginForm />

                <footer className={styles.footer}>
                    <span className={styles.footerText}>Нет аккаунта? </span>
                    <Link to="/register" className={styles.link}>
                        Зарегистрироваться
                    </Link>
                </footer>
            </div>
        </div>
    )
}
