import { Link } from "react-router-dom";
import styles from "./MustLogin.module.css";

function MustLogin() {
  return (
    <div className={styles.information}>
      <h1>Login to see your balances</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default MustLogin;
