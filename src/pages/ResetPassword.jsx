import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const ResetPassword = () => {
    const navigate=useNavigate()
    const param=useParams();
    const [password,setPassword]=useState("");
    const submitForm = async(e)=>{
      e.preventDefault();
      const res=await fetch('http://localhost:5000/user/resetPassword',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id:param.id,
          token:param.token,
          password
        })
  
      })
      const data = await res.json();
      alert(data.message)
      data.message=="Password updated"? navigate("/login"): null
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