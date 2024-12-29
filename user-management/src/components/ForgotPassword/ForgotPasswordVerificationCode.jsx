import styles from "./styles/ForgotPasswordVerificationCode.module.css";

export default function ForgotPasswordVerificationCode() {
    return(
        <div className={styles.container}>
            <h1>Forgot Password Verification Code</h1>
            <form>
                <label htmlFor="verification-code">Verification Code</label>
                <input type="text" id="verification-code" name="verification-code" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}