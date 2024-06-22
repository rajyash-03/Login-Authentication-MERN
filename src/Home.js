import React from "react";

const home = () => {
  return (
    <div className="body">
    <div >
      <nav className="nav">
       
        <button id="btn1"><a href="/login">Login</a></button>
        <button><a href="/registration">Register</a></button>

      </nav>
      <div className="text centre" >Welcome to Home Page</div>
    </div>
    </div>
  );
};

export default home;
