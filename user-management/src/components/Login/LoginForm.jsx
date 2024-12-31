import styles from "./styles/LoginFrom.module.css";
import { useState } from 'react';

export default function LoginFrom() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.userNameField}>
          <input
            name="username"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
  );
}
