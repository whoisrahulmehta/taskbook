import { faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const handleLog=()=>{
navigate('/');
  }
  return (
    <>
      <main>
        <div className="box">
          <div className="wrapper">
            <form action="submit" autoComplete="on">
              <h1>Login 
        <FontAwesomeIcon icon={faUserAlt} color="white" />
              </h1>
              <div className="input_box">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="USER_NAME"
                  autoComplete="on"
                  required
                />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  autoComplete="off"
                  required
                />
                <i className="bx bxs-lock"></i>
              </div>
              <div className="rem_forg">
                <label>
                  <input type="checkbox" name="remember" id="remember" autoComplete="on"/>
                  Remember Me
                </label>
                <a href="#">Forget Password</a>
              </div>
              <button onClick={handleLog} type="submit" className="logbtn">
                Login
              </button>
              <div className="reg_link">
                <p>
                  Dont have an Account <a href="#">Register Now</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer style={{textAlign:'center'}}>
      </footer>
    </>
  );
}

export default User;
