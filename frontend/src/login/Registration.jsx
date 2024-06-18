import React from "react";

function Registration() {
  return (
    <>
      <div class="background">
        <div className="loginform">
          <h1 className="heading1">Registration</h1>
          <br />
          <form className="form">
            <div className="input-field">
              <div className="head">
                <p>Username *</p>
              </div>
              <label for="entry" className="flexContainer emailBox">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  id="Inputvalue"
                  className="inputBox"
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <div className="head">
                <p>Email *</p>
              </div>
              <label for="entry" className="flexContainer emailBox">
                <img
                  src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_checkmark.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240618%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240618T043937Z&X-Amz-Expires=25200&X-Amz-Signature=70fb03822be6bfd1ad7adf40683b6a65838a0518eaa007d840580fc66b191a20&X-Amz-SignedHeaders=host"C
                  alt="#"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                  id="Inputvalue"
                  className="inputBox"
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
                  src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_location.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240618%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240618T043937Z&X-Amz-Expires=25200&X-Amz-Signature=35dab15bd535ac721a0c8cca175be727671a95d35d1eb1edd898073b2ee064a8&X-Amz-SignedHeaders=host"
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
                    src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_eye.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240618%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240618T043937Z&X-Amz-Expires=25200&X-Amz-Signature=22b19f155616daf0b9a12babd27bf11b93f485376bf803ef04d2d652b764d396&X-Amz-SignedHeaders=host"
                    alt=""
                  />
                </button>
              </label>
            </div>
            <br />
            <button className="loginbtn">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
