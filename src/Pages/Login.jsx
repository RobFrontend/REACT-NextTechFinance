import { useEffect, useState } from "react";
import PageNav from "../Components/PageNav";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [nick, setNick] = useState("john1988");
  const [password, setPassword] = useState("12345678");
  const { login, isAuthenticated, users } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (nick && password) login(nick, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/balance");
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.main}>
      <PageNav />
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>User name:</p>
          <input
            type="text"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder="john1988"
          />
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="12345678"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
