import styles from './styles/ForgotPasswordDetails.module.css';

function ForgotPasswordDetails() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Enter the account email</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPasswordDetails;