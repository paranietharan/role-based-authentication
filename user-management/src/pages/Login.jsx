import { useState } from 'react';
import styles from './styles/Login.module.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.topBar}>
                <p>Don't you have an account</p>
                <button>Sign up</button>
            </div>
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.userNameField}>
                        <input
                            name='username'
                            id="username"
                            type='text'
                            value={username}
                            onChange={
                                (e) => setUsername(e.target.value)
                            }
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className={styles.passwordField}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}