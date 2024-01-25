import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h2>SideBar</h2>
      <h3>
        <Link to="/">Back to home</Link>
      </h3>
      <h3>
        <Link to="/register">Create Account</Link>
      </h3>
      <h3>
        <Link to="/login">Login</Link>
      </h3>
    </div>
  );
}

export default SideBar;
