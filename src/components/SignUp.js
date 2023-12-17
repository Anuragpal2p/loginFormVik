import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    pass: "",
    cpass: "",
  });

  const [isSign, setIsSign] = useState(true);

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };
  console.log(data, "my fomrData");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (data.pass === data.cpass) {
      alert("Thansk!!! You are Succesfully Registred");

      localStorage.setItem('user', JSON.stringify(data))

      navigate("/login");
    } else {
      alert("Password and confirm pass must same");
    }
  };

  return (
    <>
      <div>
        <form
          style={{
            fontFamily: "monospace",
            width: "400px",
            border: "1px solid grey",
            margin: " 50px auto",
            padding: "50px",
          }}
          onSubmit={handleSignUp}
        >
          <input
            type="text"
            placeholder="Your Fullname"
            style={{ padding: "4px" }}
            onChange={handleInputChange}
            value={data.fullname}
            name="fullname"
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Your username"
            style={{ padding: "4px" }}
            onChange={handleInputChange}
            name="username"
            value={data.username}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Your password"
            style={{ padding: "4px" }}
            onChange={handleInputChange}
            name="pass"
            value={data.pass}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            style={{ padding: "4px" }}
            onChange={handleInputChange}
            name="cpass"
            value={data.cpass}
            required
          />
          <br />
          <br />
          <button
            style={{
              fontFamily: "monospace",
              color: "white",
              background: "blue",
              border: "none",
              borderRadius: "10px",
              padding: " 8px 62px",
            }}
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <h6 style={{ fontFamily: "monospace" }}>
            Already Ragistered?<Link to="/login">Login here</Link>
          </h6>
        </form>
      </div>
    </>
  );
};

export default SignUp;
