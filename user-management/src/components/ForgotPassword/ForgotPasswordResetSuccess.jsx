import styles from "./styles/ForgotPasswordResetSuccess.module.css";

export default function ForgotPasswordResetSuccess() {
  return (
    <div className={styles.container}>
      <h1>Password Reset Successful</h1>
      <p>
        Your password has been successfully reset. You can now log in with your
        new password.
      </p>
    </div>
  );
}
