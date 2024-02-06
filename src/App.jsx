import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./Components/Spinner";

// import HomePage from "./Pages/HomePage";
// import AccountBalance from "./Pages/AccountBalance";
// import AccountSettings from "./Pages/AccountSettings";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import AboutUs from "./Pages/AboutUs";
// import PageNotFound from "./Pages/PageNotFound";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AccountBalance = lazy(() => import("./Pages/AccountBalance"));
const AccountSettings = lazy(() => import("./Pages/AccountSettings"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

// const BASE_URL = "http://localhost:9000";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="balance" element={<AccountBalance />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
