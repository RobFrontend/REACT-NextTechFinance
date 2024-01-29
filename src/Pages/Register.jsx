import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Register() {
  return (
    <main className={styles.main}>
      <h3>
        <Link className={styles.backhome} to="/">
          Back to home
        </Link>
      </h3>
      <div>
        <form className={styles.form}>
          <p>First name:</p>
          <input type="text" placeholder="John..." />
          <p>Last name:</p>
          <input type="text" placeholder="Smith..." />
          <p>E-mail:</p>
          <input type="text" placeholder="JS@mail.com..." />
          <p>User name:</p>
          <input type="text" placeholder="JS2024..." />
          <p>Birth year:</p>
          <input type="text" placeholder="2006..." />
          <p>Password (min 8 characters):</p>
          <input type="password" />
          <p>Repeat password:</p>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Register;
