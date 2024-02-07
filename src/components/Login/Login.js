import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch= useDispatch()
  
  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);


  const { login } = useAuth();

  const handleSubmit = async (e) => {
    console.log("ami");
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to Login");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-field">
            <button disabled={loading} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
