import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <ul>
            <Link to="/">
                    <li className="active">Home</li>
                </Link>
                <Link  to="/about">
                    <li>About</li>
                </Link>
                <Link  to="/Home/chess">
                    <li>Chess</li>
                </Link>
                <Link  to="/Home/yoga">
                    <li>Yoga</li>
                </Link>
                <Link  to="/Home/gym">
                    <li>Gym</li>
                </Link >
                <Link  to="/Home/boxing">
                    <li>Boxing</li>
                </Link>
                <Link  to="/Home/driving">
                    <li>Driving</li>
                </Link>
                <Link  to="/Home/cooking">
                    <li>Cooking</li>
                </Link>
            </ul>
        </div>
    );
}
export default Nav;