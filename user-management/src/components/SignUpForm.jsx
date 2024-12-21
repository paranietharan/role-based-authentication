import { useState } from 'react';
import styles from './styles/SignUpForm.module.css'

export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Name: ', name);
    };

    return (
        <div className={styles.SignUpForm}>
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.NameField}>
                        <input
                            name='name'
                            id="name"
                            type='text'
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                            }
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

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