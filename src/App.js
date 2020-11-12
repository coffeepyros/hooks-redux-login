import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Alert from "./components/Alert";

// ACTIONS
import { showRegister, showLogin } from "./redux/actions";

// CSS
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const registerDisplay = useSelector((state) => state.registerDisplay);
  const loginDisplay = useSelector((state) => state.loginDisplay);
  const loginSuccess = useSelector((state) => state.loginSuccess);
  const alert = useSelector((state) => state.alert);
  return (
    <React.Fragment>
      <header>
        <h1>React Redux Login</h1>
        <button
          onClick={() => {
            dispatch(showRegister());
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            dispatch(showLogin());
          }}
        >
          Login
        </button>
      </header>
      <main>
        {/* Hide registration, once user registered */}
        {registerDisplay ? <Register /> : null}
        {/* FOR DEV */}
        {users.length ? JSON.stringify(users) : null}
        {loginDisplay ? <Login /> : null}
        {alert ? <Alert /> : null}
        {loginSuccess ? <Welcome /> : null}
      </main>
    </React.Fragment>
  );
}

export default App;
