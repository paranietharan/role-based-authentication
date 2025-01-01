import styles from './styles/UserDetailsAdd.module.css';
import UserTopNavBar from '../components/utils/UserTopNavBar';
import { useState } from 'react';

export default function UserDetailsAdd() {
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    nic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Details:", employeeDetails);
  };

  return (
    <div className={styles.UserDetailsAddContainer}>
      <UserTopNavBar />
      <div className={styles.body}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={employeeDetails.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={employeeDetails.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={employeeDetails.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={employeeDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nic">NIC No</label>
            <input
              type="text"
              id="nic"
              name="nic"
              value={employeeDetails.nic}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Add Employee</button>
        </form>
      </div>
    </div>
  );
}