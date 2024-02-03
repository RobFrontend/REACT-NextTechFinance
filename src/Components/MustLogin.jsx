import { Link } from "react-router-dom";
import styles from "./MustLogin.module.css";

function MustLogin({ children }) {
  return (
    <div className={styles.information}>
      <h1>Login to see your {children}</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default MustLogin;
