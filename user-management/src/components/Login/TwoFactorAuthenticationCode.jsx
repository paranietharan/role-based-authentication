import styles from './styles/TwoFactorAuthenticationCode.module.css'
import { useState } from 'react';

export default function TwoFactorAuthenticationCodeForm() {
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("2FA Code:", code);
  };

  return (
    <div className={styles.twoFactorForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.codeField}>
          <input
            name="code"
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter 2FA code"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}