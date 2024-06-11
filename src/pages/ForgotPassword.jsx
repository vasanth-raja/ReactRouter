import React,{useState} from 'react'


const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const submitForm = async(e)=>{
      e.preventDefault();
      const res=await fetch('http://localhost:5000/user/forgotPassword',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email
        })
  
      })
      const data = await res.json();
      console.log(data)
       data.message==="Mail Sent"?
        alert("Check your mail to reset password")
       :alert(data.message)
    }
  return (
    <div className="container">
    <form onSubmit={submitForm} id="myform" className="container">
      <h1>Forgot Password</h1>
      <div>
        <label htmlFor="email">EmailID</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your EmailID"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <button className="login-btn" type="submit">
        Submit
      </button>
    </form>
  </div>
  )
}

export default ForgotPassword