import React from "react";
import './styling.css';
import header from "./headerlogo.js";
class headerhomepage extends React.Component{
    render() {
        return (
            <div>
          <header />
          <div>
            <div className="searchbar">
              <input className="search" type="text" placeholder="Search..." size={60} />
              <button className="gobutton">Go</button>
            </div>
            <div>  
              <button className="button-homepage">Login/Register</button>
            </div>
           
          </div>
         </div>
        );
      }
    };
    export default headerhomepage;