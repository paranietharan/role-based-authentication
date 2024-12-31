import LoginFrom from '../components/Login/LoginForm';
import TwoFactorAuthenticationCodeForm from '../components/Login/TwoFactorAuthenticationCode';
import styles from './styles/Login.module.css';

export default function LoginPage() {
    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.topBar}>
                <p>Don't you have an account</p>
                <button>Sign up</button>
            </div>
            
            {/* <LoginFrom /> */}
            <TwoFactorAuthenticationCodeForm />
        </div>
    )
}