import ForgotPasswordDetails from "../components/ForgotPassword/ForgotPasswordDetails";
import styles from "./styles/ForgotPassword.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.ForgotPasswordDetails}>
        <ForgotPasswordDetails />
      </div>
    </div>
  );
}
