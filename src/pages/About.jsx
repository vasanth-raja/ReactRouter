import React from 'react'
import '../styles/about.css'
const About = () => {
  return (
    <div className='about-container'>
        <form>
            <h2>Edit Your Details</h2>
            <div>
                <label htmlFor="Username">UserName</label>
                <input id="Username" type='text' name='Username' />
            </div>
            <div>
                <label htmlFor="Dob">Date Of Birth</label>
                <input id="Dob" type='date' name='Dob'/>
            </div>
            <div>
                <label htmlFor="Gender">Gender</label>
                <select name='Gender' id='Gender'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
            </div>
            <div>
                <label htmlFor="Profile">Profile Pic</label>
                <input type='file' />
            </div>
            <button className="btn" type="submit">
          Submit your details
        </button>
        </form>
    </div>
  )
}

export default About