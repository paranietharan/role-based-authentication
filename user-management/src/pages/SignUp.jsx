import styles from './styles/Signup.module.css';
import SignUpForm from '../components/SignUpForm';

export default function SignUpPage() {


    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.topBar}>
                <p>Already have an account?</p>
                <button>Login</button>
            </div>
            
            <SignUpForm />
        </div>
    )
}