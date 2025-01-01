import styles from './styles/UserTopNavBar.module.css';
import { Link } from 'react-router-dom';

function UserTopNavBar() {
    return (
        <div className={styles.AdminTopNavBar}>
            <Link to="/user-add">Add</Link>
            <Link to="/user-edit">Edit</Link>
            <Link to="/user-settings">Settings</Link>
            <Link to="/">Logout</Link>
        </div>
    );
}

export default UserTopNavBar;