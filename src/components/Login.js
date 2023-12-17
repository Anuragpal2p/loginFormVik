import React from "react";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <form
          style={{
            width: "400px",
            border: "1px solid grey",
            margin: " 50px auto",
            padding: "50px",
            fontFamily:"monospace"
          }}
        >
            <h1 style={{fontFamily:"monospace"}}>Login Here!!</h1>
      <label>Username : </label>    <input
            type="text"
            placeholder="Your username"
            style={{ padding: "4px",   fontFamily:"monospace" }}
          />
          <br />
          <br />
       <label>Password : </label>   <input
            type="password"
            placeholder="Your password"
            style={{ padding: "4px" ,   fontFamily:"monospace"}}
          />
          <br />
          <br/>
          <button
            style={{
              color: "white",
              background: "blue",
              border: "none",
              borderRadius: "10px",
              padding: " 8px 62px",
              fontFamily:"monospace"
            }}
          >
            Login
          </button>
          <h5 style={{  fontFamily:"monospace", fontWeight:"bold"}}>
            Not Ragistered yet? <Link to="/"> Sign Up here</Link>
          </h5>
        </form>
      </div>
    </>
  );
};

export default Login;
