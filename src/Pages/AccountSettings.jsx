import PageNav from "../Components/PageNav";
import { useAuth } from "../context/AuthContext";
import stylesLog from "./AccountBalance.module.css";
import MustLogin from "../Components/MustLogin";
import styles from "./AccountSettings.module.css";
import { Link } from "react-router-dom";

function AccountSettings() {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated)
    return (
      <main className={stylesLog.main}>
        <PageNav />
        <MustLogin>settings</MustLogin>
      </main>
    );
  return (
    <main className={styles.main}>
      <PageNav />
      <section>
        <h1>Account Settings</h1>
        <article>
          <div>
            <h2>Your personal data:</h2>
            <p>First name: {user.firstname}</p>
            <p>Last name: {user.lastname}</p>
            <p>Age: {new Date().getFullYear() - user.birthyear}</p>
            <p>E-mail: {user.email}</p>
          </div>
          <div>
            <h2>Account data:</h2>
            <p>Status: {user.status}</p>
            <p>ID: {user.id}</p>
            <p>User name: {user.nick}</p>
          </div>
          <div>
            <h2>Loan:</h2>
            <p>{user.loan > 0 ? `$${user.loan}` : "no loan was taken out"}</p>
          </div>
          <Link to="/balance">Return the loan</Link>
        </article>
      </section>
    </main>
  );
}

export default AccountSettings;
