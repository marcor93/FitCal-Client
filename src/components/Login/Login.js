import "./Login.scss";
import { useState } from "react";

function Login() {
  const [newAcc, setNewAcc] = useState(false);

  const handleSignin = (e) => {
    // e.preventDefault();
    // axios.post(loginUrl, {
    //   username: e.target.username.value,
    //   password: e.target.password.value
    // })
    //   .then((response) => {
    //     sessionStorage.setItem('JWTtoken', response.data.token);
    //     setIsLoggedIn(true);
    //     setIsLoginError(false);
    //     setErrorMessage("");
    //   })
    //   .catch((error) => {
    //     setIsLoginError(true);
    //     setErrorMessage(error.response.data.error.message);
    //   });
  };

  const handleSignup = (e) => {
    alert(
      "thank you for creating an account, please use your new details to sign in below"
    );
  };

  const togglesu = (e) => {
    setNewAcc(true);
    console.log(newAcc);
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
                  type="text"
                  name="username"
                />
              </div>
              <div className="signin__field">
                <p className="signin__field--text">Confirm Password:</p>
                <input
                  className="signin__field--input"
                  type="text"
                  name="username"
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
