import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./Login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../features/cartHandler/cartHandler";
import ErrorModal from "../ErrorModal/ErrorModal"
import {errorModalOpen, errorModalClose} from "../../features/cartHandler/cartHandler"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const {errorCondition} = useSelector((state) => state.cartHandler) ||{}

  useEffect(() => {
    dispatch(handleClose());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const { login, googleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to Login. Or account not already exist.");
      setLoading(false);
      dispatch(errorModalOpen())
    } finally {
      setLoading(false);
    }
  };

  const handleError=()=>{
      dispatch(errorModalClose())
  } 

  return (
    <div className="login">
      {errorCondition && <ErrorModal text="Incorrect Email or Password"></ErrorModal>}
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
          <Link to="/register">
          <p style={{color:"green", fontWeight:"bold"}}>Create new Account</p></Link>
          {error && handleError}
          {/* {error && <p className="error">{error}</p>} */}
          <div className="button-field">
            <button disabled={loading} type="submit">
              Login
            </button>
            <p className="or">--OR--</p>
            <div onClick={googleSignIn} className="google">Google SignIn</div>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
