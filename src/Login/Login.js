import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../Store/cart-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authCtx = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFQ20cUJsD1isKI2-6imymii3kH72k7rE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Authentication failed");
        }
        return res.json();
      })
      .then((data) => {
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        setError(null); // Clear any previous errors
        authCtx.isLoggedIn(data.idToken, data.email);
        console.log(authCtx);
        console.log(data);
        navigate("/products"); // Redirect to the dashboard page upon successful login
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                  <label htmlFor="emailId">Email Id</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    placeholder="Enter your email Id"
                    required
                    ref={emailInputRef}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    ref={passwordInputRef}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-2"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
