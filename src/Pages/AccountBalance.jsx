import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import { useAuth } from "../context/AuthContext";
import styles from "./AccountBalance.module.css";
import { useEffect, useState } from "react";

function AccountBalance() {
  const { user, isAuthenticated } = useAuth();
  const [withdraws, setWithdraws] = useState([]);
  const [deposits, setDeposits] = useState([]);

  useEffect(
    function () {
      if (!isAuthenticated) return;
      setDeposits(
        (deposits) =>
          (deposits = user.movements
            .filter((mov) => mov > 0)
            .map((dep) => `$${dep} `))
      );
    },
    [user, isAuthenticated]
  );
  useEffect(
    function () {
      if (!isAuthenticated) return;
      setWithdraws(
        (withdraws) =>
          (withdraws = user.movements
            .filter((mov) => mov < 0)
            .map((withs) => `$${-withs} `))
      );
    },
    [user, isAuthenticated]
  );

  if (!isAuthenticated)
    return (
      <main className={styles.main}>
        <PageNav />
        <h1>Login to see your balances</h1>
        <Link to="/login">Login</Link>
      </main>
    );

  return (
    <main className={styles.main}>
      <PageNav />
      <h1>Welcome {user.firstname}!</h1>
      <article className={styles.article}>
        <div className={styles.balanceBox}>
          <p>Account status: {user.status}</p>
          <p>
            Balance: <span>${user.balance}</span>
          </p>
          <p>Loan: ${user.loan}</p>
        </div>
        <div className={styles.movements}>
          <h2>Movements: </h2>
          <p>
            Deposits:{" "}
            {deposits && deposits.length >= 1 ? deposits : "No deposits"}
          </p>
          <p>
            Withdrawals:{" "}
            {withdraws && withdraws.length >= 1 ? withdraws : "No withdrawals"}
          </p>
        </div>

        <div>
          <h2>History:</h2>
        </div>
      </article>
    </main>
  );
}

export default AccountBalance;
