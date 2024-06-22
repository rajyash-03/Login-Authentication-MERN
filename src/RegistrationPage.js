import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

  const [registrationData,setregistrationData]=useState({
    username:'',
    password:''
  })
  const handleRegister=(e)=>{
    const{name,value}=e.target
    setregistrationData((prevData)=>({
      ...prevData,
      [name]:value,
    }))


  }

  const handleResisterSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:8000/register',registrationData);
      console.log(response.data);
    }

    catch(error){
      console.log(error);
    }

    setregistrationData({
      username:'',
      password:''
    })


  }
  return (

   < div className="flex min-h-screen items-center justify-center">
    <div className="container max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className='cointainer'>Registration Form</h1>
      <div className='input-box'>
        <form onSubmit={handleResisterSubmit}>
          <label className="text">
            Username
          </label>
          <br/>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={registrationData.username}
            onChange={handleRegister}
            required
            className="text-box"
          />
          <br/>
          <br/>
          
          <div className="mt-4">
            <label className="text">
              Password
            </label>
            <br/>
            <input
              type='password'
              name='password'
              placeholder='password'
              value={registrationData.password}
              onChange={handleRegister}
              required
              className="text-box"
            />
          </div>
          <br/>
          
          <button type='submit'>
            Register
          </button>
          <p >
            Already Registered? <Link to="/login" >Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  </div>









    
//     <div className="cointainer">
//       <h1 className='cointainer'>Registration Form</h1>
//       <div className='input-box'>
//       <form onSubmit={handleResisterSubmit}>
//       <label className="text">
//           Username
//         </label>
//         <br/>
        
//         <input  type='text'name='username' placeholder='username' value={registrationData.username} onChange={handleRegister} required className="text-box"/>

//         <div>
//         <br/>
//         <label className="text">
//           Password
//         </label>
// <div>
//         <input className="text-box" type='password'name='password' placeholder='password' value={registrationData.password} onChange={handleRegister} required/>

//         </div>
//         </div>
        
//         <br/>

//         <button type='submit'>Register</button>
//         <p>
//           Already Registered?
//           <Link to="/login">Login Here</Link>
//         </p>
 

//       </form>
//       </div>
//     </div>
  )
}

export default Register