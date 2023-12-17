import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    pass: "",
  });

  const handleloginData = (e) => {
    e.preventDefault();
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(loginData, "myloginData");

    
  };

  const handleLogin = (e) => {
   
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if( storedUser.username === loginData.username && storedUser.pass === loginData.pass){
        alert("You Logged In Successfully!!!!..")
    }
    else(
        alert("Incorrect Credentials")
       
    )
  };

  return (
    <>
      <div>
        <form
          style={{
            width: "400px",
            border: "1px solid grey",
            margin: " 50px auto",
            padding: "50px",
            fontFamily: "monospace",
          }}
          onSubmit={handleLogin}
        >
          <h1 style={{ fontFamily: "monospace" }}>Login Here!!</h1>
          <label>Username : </label>{" "}
          <input
            type="text"
            placeholder="Your username"
            style={{ padding: "4px", fontFamily: "monospace" }}
            onChange={handleloginData}
            name="username"
            value={loginData.username}
          />
          <br />
          <br />
          <label>Password : </label>{" "}
          <input
            type="password"
            placeholder="Your password"
            style={{ padding: "4px", fontFamily: "monospace" }}
            onChange={handleloginData}
            name="pass"
            value={loginData.pass}
          />
          <br />
          <br />
          <button
            style={{
              color: "white",
              background: "blue",
              border: "none",
              borderRadius: "10px",
              padding: " 8px 62px",
              fontFamily: "monospace",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          <h5 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Not Ragistered yet? <Link to="/"> Sign Up here</Link>
          </h5>
        </form>
      </div>
    </>
  );
};

export default Login;
