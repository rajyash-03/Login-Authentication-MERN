import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import RegistrationPage from "./RegistrationPage.js";
import Home from "./Home.js"

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
