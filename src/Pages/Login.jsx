import PageNav from "../Components/PageNav";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.main}>
      <PageNav />
      <div>
        <form className={styles.form}>
          <p>User name:</p>
          <input type="text" placeholder="JS2024..." />
          <p>Password:</p>
          <input type="password" placeholder="******" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
