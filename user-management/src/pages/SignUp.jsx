import { useState } from 'react';
import styles from './styles/Signup.module.css';
import SignUpForm from '../components/SignUpForm';
import OtpVerification from '../components/OtpVerification';

export default function SignUpPage() {
    const [isSignUpComplete, setIsSignUpComplete] = useState(false);

    const handleSignUpSuccess = () => {
        setIsSignUpComplete(true);
    };

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.topBar}>
                <p>Already have an account?</p>
                <button>Login</button>
            </div>
            
            {isSignUpComplete ? (
                <OtpVerification />
            ) : (
                <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
            )}
        </div>
    )
}