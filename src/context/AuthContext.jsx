import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  // users: [],
  users: null,
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      // return { ...state, users: [...state.users, action.payload] };
      return { ...state, users: action.payload };
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Error in login/logout process...");
  }
}

// const BASE_URL = "http://localhost:9000";
const BASE_URL = "https://robfrontend.github.io/host_api_nextech/accounts.json";

function AuthProvider({ children }) {
  const [{ users, user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchAccounts() {
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        const userData = data.accounts[0];

        dispatch({ type: "dataReceived", payload: userData });
      } catch (err) {}
    }
    fetchAccounts();
  }, []);

  function login(nick, password) {
    if (nick === users.nick && password === users.password)
      dispatch({ type: "login", payload: users });
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ users, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
