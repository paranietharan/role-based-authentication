import React, { useState } from 'react';
import styles from './styles/AdminSettings.module.css';
import AdminTopNavBar from '../components/AdminTopNavBar';

function AdminSettingsPage() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }
        // Implement password change logic here
        alert('Password changed successfully');
    };

    return (
        <div className={styles.AdminSettings}>
            <AdminTopNavBar />
            <div className={styles.AdminSettingsContent}>
                <h2>Change Password</h2>
                <form className={styles.ChangePasswordForm}>
                    <label>
                        Current Password:
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={handleCurrentPasswordChange}
                        />
                    </label>
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                    </label>
                    <label>
                        Confirm New Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </label>
                    <button type="button" onClick={handleChangePassword} className={styles.ChangePasswordButton}>
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminSettingsPage;