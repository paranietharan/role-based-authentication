import styles from "./styles/UserDetailsEdit.module.css";
import UserTopNavBar from "../components/utils/UserTopNavBar";
import { useState } from "react";

const dummyEmployees = [
  {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    nic: "123456789V",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    phoneNumber: "987-654-3210",
    email: "jane.smith@example.com",
    nic: "987654321V",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    phoneNumber: "555-555-5555",
    email: "alice.johnson@example.com",
    nic: "555555555V",
  },
];

export default function UserDetailsEdit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const employee = dummyEmployees.find(
      (emp) =>
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.nic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (employee) {
      setEmployeeDetails(employee);
    } else {
      alert("Employee not found");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Employee Details:", employeeDetails);
  };

  return (
    <>
      <UserTopNavBar />
      <div className={styles.UserDetailsEditContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name or NIC"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>
        {employeeDetails && (
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
              <button type="submit" className={styles.submitButton}>
                Update Employee
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
