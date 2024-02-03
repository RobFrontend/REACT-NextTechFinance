import { NavLink, useNavigate } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";

function PageNav() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/balance">Balance</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        {!isAuthenticated ? (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        ) : (
          <button className={styles.logout} onClick={handleClick}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
