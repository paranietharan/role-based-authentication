import { useState } from 'react';
import styles from './styles/SignUpForm.module.css';

export default function SignUpForm({ onSignUpSuccess }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        onSignUpSuccess();
    };

    return (
        <div className={styles.signUpPageContainer}>
            <div className={styles.signUpForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.nameField}>
                        <input
                            name='name'
                            id="name"
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className={styles.emailField}>
                        <input
                            name='email'
                            id="email"
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
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

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}