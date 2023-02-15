import "./Login.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [newAcc, setNewAcc] = useState(false);
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const navigate = useNavigate();

  const changepass1 = (e) => {
    setpass1(e.target.value);
  };

  const changepass2 = (e) => {
    setpass2(e.target.value);
  };

  const SignupAPI = "http://localhost:8080/auth/signup";
  const LoginAPI = "http://localhost:8080/auth/login";

  const handleSignup = (e) => {
    e.preventDefault();
    if (pass1 != pass2) {
      alert("Passwords must match");
      return;
    }
    axios
      .post(SignupAPI, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then(() => {
        setNewAcc(false);
        alert("Thank you for creating an account!");
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    axios
      .post(LoginAPI, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("JWTtoken", response.data.token);
        if (response.data === "Try Again!") {
          alert("Please Try Again");
          return;
        }
        navigate("/activity");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const togglesu = (e) => {
    setNewAcc(true);
  };

  return (
    <section className="login">
      <div className="login__container">
        <div className="signin">
          <h2 className="signin__heading">Sign In</h2>
          <form className="signin__form" onSubmit={handleSignin}>
            <div className="signin__field">
              <p className="signin__field--text">Username:</p>
              <input
                className="signin__field--input"
                type="text"
                name="username"
              />
            </div>
            <div className="signin__field">
              <p className="signin__field--text"> Password:</p>
              <input
                className="signin__field--input"
                type="password"
                name="password"
                autoComplete="enter your password"
              />
            </div>
            <button className="signin__btn" type="submit">
              Enter
            </button>
          </form>
        </div>

        <div className="signup">
          <h2 className="signup__heading">New User</h2>
          {!newAcc && (
            <p className="signup__btn" onClick={togglesu}>
              Sign Up
            </p>
          )}
          {newAcc && (
            <form className="signin__form" onSubmit={handleSignup}>
              <div className="signin__field">
                <p className="signin__field--text">Username:</p>
                <input
                  className="signin__field--input"
                  type="text"
                  name="username"
                />
              </div>
              <div className="signin__field">
                <p className="signin__field--text">Password:</p>
                <input
                  className="signin__field--input"
                  type="password"
                  name="password"
                  autoComplete="passwords must match"
                  onChange={changepass1}
                />
              </div>
              <div className="signin__field">
                <p className="signin__field--text">Confirm Password:</p>
                <input
                  className="signin__field--input"
                  type="password"
                  name="password2"
                  autoComplete="passwords must match"
                  onChange={changepass2}
                />
              </div>
              <button className="signin__btn" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
