import React from "react";
import './styling.css';
import logo from "./logo.png";
class header extends React.Component{
    render() {
        return (
          <div>
            <div><img src= {logo} alt="logo" className="logo" /></div> 
            <div className="brandname"><h1>Class Monk</h1></div>
          </div>
        );
      }
    };
export default header;