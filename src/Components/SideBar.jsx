import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div>
        <Link to="/">Back to home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Create Account</Link>
      </div>
      <img src="img/LogoSmallLight.png" alt="Logo" />
    </div>
  );
}

export default SideBar;
