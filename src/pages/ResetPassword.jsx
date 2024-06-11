import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate=useNavigate()
    const [password,setPassword]=useState("");
    const submitForm = async(e)=>{
      e.preventDefault();
      const res=await fetch('http://localhost:5000/user/resetPassword',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          password
        })
  
      })
      const data = await res.json();
      console.log(data)
       data.message=="Password Changed"?()=>{navigate('/login') 
        alert("Check your mail to reset password")
       }:alert(data.message)
    }
  return (
    <div className="container">
    <form onSubmit={submitForm} id="myform" className="container">
      <h1>Reset Password</h1>
      <div>
        <label htmlFor="password">New Password</label>
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
        Change password
      </button>
    </form>
  </div>
  )
}

export default ResetPassword