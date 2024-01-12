import React from "react";
// import axios from "axios";
import "../style/Register.css";
// import { useNavigate } from "react-router-dom";

const Register = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // const [role, setRole] = useState("");
  // const [msg, setMsg] = useState("");
  // const navigate = useNavigate();

  // const saveUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5006/users',{
  //     email: email,
  //     password: password,
  //     confPassword: confPassword,
  //     role: role  
  //   });
  //   navigate("/users");
  //   } catch (error) {
  //     setMsg(error.response.data.msg);
  //   }
  // }

  return (
    <div class="body">
      <div class="register-container">
        <h2>Register</h2>
        <form onSubmit="#">
        {/* <p className='has-text-centered'>{msg}</p> */}
          <input type="email" className="input" placeholder="Email"/>
          <input
            type="password"
            className="input"
            placeholder="Password"
           
          />
          <input type="password" className="input"
          placeholder="Konfirmasi Password" />
           <input type="password" className="input"
          placeholder="Konfirmasi Password" />
          <button type="submit" className="button is-info">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
