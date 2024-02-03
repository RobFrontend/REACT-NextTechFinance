import PageNav from "../Components/PageNav";
import { useAuth } from "../context/AuthContext";
import styles from "./AccountBalance.module.css";
import MustLogin from "../Components/MustLogin";

function AccountSettings() {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated)
    return (
      <main className={styles.main}>
        <PageNav />
        <MustLogin />
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
