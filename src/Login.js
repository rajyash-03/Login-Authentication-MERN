import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  // const [success, setSuccess] = useState(false); 
  // const [message, setMessage] = useState('');
  //submit fun
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      ); //YHA BHEJ DO
      const { success, message } = response.data;

      // setSuccess(success);
      // setMessage(message);

      if (success) {
        console.log("Login successfull");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Login error", error);
      // setMessage("Login failed due to server error");
    }
    setloginData({
      username: "",
      password: "",
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div >
  <div className="cointainer">
   
    <h2 >
      Sign in to your account
    </h2>
  </div>

  <h1 className="cointainer">Login Page</h1>
  <div className="input-box">
    <form onSubmit={handleLoginSubmit}>
      
        <label className="text">
          Username
        </label>
        <div className="mt-2">
          <input className="text-box"
            type="text"
            name="username"
            placeholder="username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          
          />
        </div>
   
      <div>
        <br/>
        
        <label className="text" >
          Password
        </label >
        <div >
          <input className="text-box"
            type="password"
            name="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          
          />
        </div>
      </div>
      <br />
      <button type="submit">Login</button>
      {/* {success && <p>{message}</p>} */}
      
      <p >
        Not Registered Yet?
        <Link to="/registration">Register here</Link>
      </p>
    </form>
  </div>
</div>
  )}

export default Login;
