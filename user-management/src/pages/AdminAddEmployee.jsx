import React, { useState } from 'react';
import AdminTopNavBar from '../components/utils/AdminTopNavBar';
import styles from './styles/AdminAddPage.module.css';

export default function AdminAddPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Username:', username);
        // Add functionality goes here
    };

    return (
        <div className={styles.AdminPage}>
            <AdminTopNavBar />
            <div className={styles.body}>
                <h1>Add Employee</h1>
                <form onSubmit={handleSubmit} className={styles.addForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Add Employee</button>
                </form>
            </div>
        </div>
    );
}