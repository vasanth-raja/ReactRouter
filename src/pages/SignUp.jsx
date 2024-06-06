import React,{useState} from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const submitForm = async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:5000/user/signup',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })

    })
    const data = await res.json();
     data.message=="User created"?navigate('/login'):alert(data.message)
  }
  return (
    <div>
      <form onSubmit={submitForm} id="myform" className="container">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Retype Your password"
          />
        </div>
        <button className="login-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
