import React, { useState } from 'react';
import styles from './styles/AdminEdit.module.css';
import AdminTopNavBar from '../components/utils/AdminTopNavBar';

function AdminEditPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' }
    ]);
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleEdit = (user) => {
        setUserDetails(user);
    };

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleSave = () => {
        const updatedUsers = users.map(user => user.id === userDetails.id ? userDetails : user);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setUserDetails({ name: '', email: '', role: '' });
    };

    return (
        <div className={styles.AdminEdit}>
            <AdminTopNavBar />
            <div className={styles.AdminEditContent}>
                <div className={styles.AdminEditSearch}>
                    <input
                        type="text"
                        placeholder="Search user..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.SearchBar}
                    />
                    <button onClick={handleSearch} className={styles.SearchButton}>
                        Search
                    </button>
                </div>

                <div className={styles.AdminEditTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user)} className={styles.EditButton}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)} className={styles.DeleteButton}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <form className={styles.EditForm}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Role:
                        <input
                            type="text"
                            name="role"
                            value={userDetails.role}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="button" onClick={handleSave} className={styles.SaveButton}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default AdminEditPage;