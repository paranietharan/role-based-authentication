import styles from './styles/AdminTopNavBar.module.css';
import { Link } from 'react-router-dom';

function AdminTopNavBar() {
    return (
        <div className={styles.AdminTopNavBar}>
            <Link to="/">Add</Link>
            <Link to="/">Edit</Link>
            <Link to="/">Settings</Link>
            <Link to="/">Logout</Link>
        </div>
    );
}

export default AdminTopNavBar;