import React, { useEffect, useState } from "react";
import "./Register.scss";
import Footer from "../Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../ErrorModal/ErrorModal";
import { errorModalOpen } from "../../features/cartHandler/cartHandler";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {errorCondition}= useSelector(state=>state.cartHandler) || {}
  const dispatch= useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { signup, googleSignIn } = useAuth();

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn`t match.");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      setLoading(false)
      navigate("/home");
    } catch (err) {
      // setError("Failed to Register");
      dispatch(errorModalOpen())
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-section">
      {
        errorCondition && <ErrorModal text="Failed to Create Account. Click the Google SignIn button."/>
      }
      <div className="container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-field">
            <button disabled={loading} type="submit">
              Sign Up
            </button>
            <p>--OR--</p>
            <div className="google" onClick={googleSignIn}>
              Google SignIn
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>

  );
};

export default Register;
