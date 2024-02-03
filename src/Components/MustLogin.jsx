import { Link } from "react-router-dom";

function MustLogin() {
  return (
    <div>
      <h1>Login to see your balances</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default MustLogin;
