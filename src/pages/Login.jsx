import React,{useState} from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const submitForm = async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:5000/user/login',{
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
    data.message=='Auth successful'?navigate('/'):alert("Login Failed")
  }
  return (
    <div className="container">
   
    <form onSubmit={submitForm} id="myform"  className="container" >
        <h1>Login</h1>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter Your Email"
    value={email} onChange={(e)=>{setEmail(e.target.value)}}
    />
    </div>
    <div>
    <label  htmlFor="password">Password</label>
    <input type="password"name="password"  placeholder="Enter Your password"
    value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div>
      <Link to="/forgotPassword">Forgot Password</Link>
    </div>
    <button className="login-btn" type="submit">LOGIN</button>
   
    </form>
</div>
  )
}

export default Login