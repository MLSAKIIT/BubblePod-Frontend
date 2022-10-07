import './newlogin.css';
import React from 'react';
import Newlogin from './loginForm';
function Login() {
  return (
    <>
      <Newlogin />
      {/* <div className="loginform">
        <div className="container">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
              <div className="image">
              </div>
            </div>
            <div className="body-form">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                </div>
                <div className="left">
                  <div>
                    <input type="text" className="names" placeholder="Name" /><br></br>
                  </div>
                  <div>
                    <input type="text" className="email" placeholder="Email" /><br></br>
                  </div>
                  <div >
                    <input type="text" className="phone" placeholder="Phone" /><br></br>
                  </div>
                  <div>
                    <input type="text" className="insta" placeholder="Insta" /><br></br>
                  </div>
                </div>
                <div className="right">
                  <div>
                    <input type="text" className="gender" placeholder="Gender" /><br></br>
                  </div>
                  <div>
                    <input type="text" className="rel" placeholder="Relation Status" /><br></br>
                  </div>
                  <div>
                    <input type="text" className="lang" placeholder="Language" /><br></br>
                  </div>
                  <div>
                    <input type="text" className="city" placeholder="City" /><br></br>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-btn-primary shadow login" >Sign up</button>

        <div className="signup-with-google">
          <p>
            <hr className="line"></hr>

          </p>
          <button type="button" className="login-with-google-btn image-shadow" >
            <i className="fi fi-brands-google fis"></i>
            Sign in with Google
          </button>

        </div>
      </div> */}
    </>

  );
}

export default Login;