import React, { useState } from 'react'
import "./login.css"
import logo from "../../assets/logo.png"

function Login() {

  const [signStatus, setSignStatus] = useState("Sign In");
  return (
    <div className='login'>
      <img src={logo} className='login-logo'></img>
      <div className="login-form">
        <h1>{signStatus}</h1>
        <form action="">
          {signStatus === "Sign Up" ? <input type="text" name="" id="" placeholder='Your Name' /> : <></>}
          <input type="email" name="" id="" placeholder='Email' />
          <input type="password" name="" id="" placeholder='Password' />
          <button>{signStatus}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signStatus === "Sign In" ? <p>New to Netflix?<span onClick={() => setSignStatus("Sign Up")}>Sign Up</span></p> : <p>Already have account?<span onClick={() => setSignStatus("Sign In")}>Sign In
          </span></p>}


        </div>

      </div>
    </div>
  )
}

export default Login