import styles from './styles/AdminTopNavBar.module.css';
import { Link } from 'react-router-dom';

function AdminTopNavBar() {
    return (
        <div className={styles.AdminTopNavBar}>
            <Link to="/admin-add">Add</Link>
            <Link to="/admin-edit">Edit</Link>
            <Link to="/admin-settings">Settings</Link>
            <Link to="/">Logout</Link>
        </div>
    );
}

export default AdminTopNavBar;