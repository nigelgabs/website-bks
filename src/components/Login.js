import React, {useState, useEffect} from "react";
import "../style/Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{user, isError, isSuccess, isLoading, message} = useSelector ( (state => state.auth));

  useEffect (() => {
    if(user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  },[user, isSuccess, dispatch,navigate]);
  
    const Auth = (e)=> {
  e.preventDefault();
  dispatch(LoginUser({email, password}))
    }
  return (
    <div class="body">
      <div class="login-container">
        <h2>Login</h2>
        <form onSubmit={Auth} method="post">
          {isError && <p className="has-text-centered">{message}</p>}
          <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input
            type="password"
            className="input"
            value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"/>
          <p>        Don't have an account? <NavLink to="/Register">Register</NavLink>
          </p>
          <button type="submit" className="button is-info">{isLoading ? 'Loading...' : 'Login'}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
