import React from "react";
import {Link} from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div>
        <form style={{  fontFamily:"monospace",width:"400px",border:"1px solid grey", margin:" 50px auto", padding:"50px"}}>

          <input type="text" placeholder="Your Fullname"  style={{padding:"4px"}}/> <br/><br/>
          <input type="text" placeholder="Your username"  style={{padding:"4px"}} /><br/><br/>
          <input type="password" placeholder="Your password"  style={{padding:"4px"}} /><br/><br/>
          <input type="password" placeholder="Confirm password"   style={{padding:"4px"}} /><br/><br/>
          <button style={{  fontFamily:"monospace",color:"white", background:"blue", border:"none", borderRadius:"10px", padding:" 8px 62px"}}>Sign Up</button>
        <h6 style={{  fontFamily:"monospace"}}>Already Ragistered?<Link to="/login">Login here</Link></h6>
        </form>
      </div>
    </>
  );
};

export default SignUp;
