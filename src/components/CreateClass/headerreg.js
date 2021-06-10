import React from "react";
import './styling.css';
import header from "./headerlogo.js";
class headerregister extends React.Component{
    render(){
        return (
            <div>
            <header />
          <div>
            <div> <button className="button1">Create a class</button></div>
            <div><button className="button2">Login</button></div>
           
          </div>
          </div>
        );
      }
    };
    export default headerregister;