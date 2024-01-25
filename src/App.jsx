import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AccountBalance from "./Pages/AccountBalance";
import AccountSettings from "./Pages/AccountSettings";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";
import PageNotFound from "./Pages/PageNotFound";

function App() {
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
