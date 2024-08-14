import { useState } from "react";
import assets from "../../assets/assets";
import "./Login.css";
import { signup, login, resetPass } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            placeholder="Username"
            required
            className="form-input"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button className="" type="submit">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign up")}>click here</span>
            </p>
          )}
          {currState === "Login" ? (
            <p className="login-toggle">
              Forgot password ?{" "}
              <span onClick={() => resetPass(email)}>reset here</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
