
import React from "react";
import logo from './user_logo.png';
import   './Register.css';
const Register = () => {
    function Alert() {
        return alert("!! Static Form !!");
      };   
      return(
        <div className = "Div1" >
          <img  src = {logo} alt="Img is Here" width = "90" height = "80"></img>
          <p><b>Upload your profile picture</b></p>
          <div className = "Div2">
          <p><b>I am: </b></p>
          </div>
          <div className = "Div3">
                <input type="radio" name="sample"/>
                <input type="radio" name="sample"/>
                <div className = "Div4"><span>an Instructor</span> </div>
                
                <div className = "Div5"><span>a Business </span></div>
          </div>
          <br></br>
          <form >
          <table className = "Table" align = "center">      
          <tr>
            <th className ="th1">First Name</th>
            <th className ="th2">Last Name</th>
          </tr>
          <tr>
            <td>
            <input type="text" name="fname"  />
            </td>
            <td>
            <input type="text" name="lname"/>
            </td>
          </tr>
          <tr>
            <th className ="th3">Do you have website?</th>
            <th className ="th4">Phone number</th>
          </tr>
          <tr>
            <td>
            <input type="text" name="fname"  />
            </td>
            <td>
            <input type="text" name="lname"/>
            </td>
          </tr>   
          </table>
          <button className = "Button" onClick = {Alert}>Get Started</button> 
          </form>
        </div>
      );
};

export default Register;