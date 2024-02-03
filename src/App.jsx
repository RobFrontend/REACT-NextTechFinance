import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AccountBalance from "./Pages/AccountBalance";
import AccountSettings from "./Pages/AccountSettings";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";
import PageNotFound from "./Pages/PageNotFound";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

function App() {
  const [accounts, setAccounts] = useState([]);

  const [deposits, setDeposits] = useState([]);
  const [withdraws, setWithdraws] = useState([]);

  useEffect(function () {
    async function fetchAccounts() {
      try {
        const res = await fetch(`${BASE_URL}/accounts`);
        const data = await res.json();
        setAccounts(data[1]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAccounts();
  }, []);

  useEffect(
    function () {
      setDeposits(
        accounts.movements && accounts.movements.length > 0
          ? accounts.movements.filter((mov) => mov > 0).map((dep) => `$${dep} `)
          : "no movements"
      );
    },
    [accounts]
  );
  useEffect(
    function () {
      setWithdraws(
        accounts.movements && accounts.movements.length > 0
          ? accounts.movements
              .filter((mov) => mov < 0)
              .map((wit) => `$${-wit} `)
          : "no movements"
      );
    },
    [accounts]
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="balance" element={<AccountBalance />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
