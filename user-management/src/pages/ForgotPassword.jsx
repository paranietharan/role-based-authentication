import ForgotPasswordDetails from "../components/ForgotPassword/ForgotPasswordDetails";
import ForgotPasswordVerificationCode from "../components/ForgotPassword/ForgotPasswordVerificationCode";
import ForgotPasswordResetSuccess from "../components/ForgotPassword/ForgotPasswordResetSuccess";
import styles from "./styles/ForgotPassword.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.ForgotPasswordDetails}>
        <ForgotPasswordDetails />
      </div> */}
      {/* <div className={styles.ForgotPasswordVerification}>
        <ForgotPasswordVerificationCode />
      </div> */}
      <div className={styles.ForgotPasswordResetSuccess}>
        <ForgotPasswordResetSuccess />
      </div>
    </div>
  );
}
