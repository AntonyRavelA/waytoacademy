import React from 'react';
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="#">Way To ACADEMY</a>
        <ul className="navbar-nav">
          <li className='nav-item'>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to="/create-class">Create Class</Link>
          </li>         
          <li className='nav-item'>
            <Link className="nav-link" to="/my-profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header;