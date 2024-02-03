import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import { useAuth } from "../context/AuthContext";
import styles from "./AccountBalance.module.css";

function AccountSettings() {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated)
    return (
      <main className={styles.main}>
        <PageNav />
        <h1>Login to see your account settings</h1>
        <Link to="/login">Login</Link>
      </main>
    );
  return (
    <main>
      <PageNav />
      <h1>Account Settings</h1>
      <h2>Your personal data:</h2>
      <h2>
        Name: {user.firstname} {user.lastname}
      </h2>
      <h2>E-mail: {user.email}</h2>
      <h2>ID: {user.id}</h2>
      <h2>User name: {user.nick}</h2>
    </main>
  );
}

export default AccountSettings;
