import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  
  const handleSubmit = () =>{

  }

  return (
    <>
      <div className="loginform">
        <h1 className="heading1">Login</h1>
        <br />
        <form className="form">
        <div className="input-field">
          <div className="head">
            <p>Email *</p>
          </div>
          <label for="entry" className="flexContainer emailBox">
            <img
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_checkmark.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240613%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T113826Z&X-Amz-Expires=25200&X-Amz-Signature=9f20fc24f05c557f762f3814237ece60d11c23eb8ff34e1b70cfb6570175ae6f&X-Amz-SignedHeaders=host"
              alt="#"
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              id="Inputvalue"
              className="inputBox"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          </div>
          <div className="input-field">
          <div className="head">
            <p>Password *</p>
          </div>
          <label for="entry" className="flexContainer emailBox">
            <img
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_location.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240613%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T113826Z&X-Amz-Expires=25200&X-Amz-Signature=6a5d5d655804450b5fac55a4ed4bf94ec8848c7aafed6d812df3731c52ccbbfd&X-Amz-SignedHeaders=host"
              alt="#"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id="Inputvalue"
              className="inputBox"
              required
            />
            <button className="view">
              <img
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_eye.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240613%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240613T113826Z&X-Amz-Expires=25200&X-Amz-Signature=6656408ca2a51676975ac4e6f6a55c367c9c39b044d197a9a6594cc11d9b2d2c&X-Amz-SignedHeaders=host"
                alt=""
              />
            </button>
          </label>
          </div>
         
          <div className="right">
            <a href="" className="forgot">Forgot password?</a>
            </div>
          <br />
          <button className="loginbtn" onClick={handleSubmit}>Login</button>
        </form>
        <br />

        <div className="newuser"><p>
          New to Furnihouse? <a href="">Register</a>
        </p>
        </div>
      </div>
    </>
  );
}
export default Login;
