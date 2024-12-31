import { useState } from "react";
import styles from "./styles/OtpVerification.module.css"

export default function OtpVerification() {
    const [code, setCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("OTP : ", code)
    }
    return (
        <div className={styles.OtpVerification}>
            <div className={styles.OtpVerificationForm}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="otp"
                        id="otp"
                        placeholder="Enter the otp code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}