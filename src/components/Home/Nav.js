import React from 'react';
import './App.css';

function Nav() {
    return (
        <div className="nav">
            <ul>




                <li>
                    <a className="active" href="#">Home</a>
                </li>
                <li>
                    <a href="#">Yoga</a>
                </li>
                <li>
                    <a href="#">Cooking</a>
                </li>
                <li>
                    <a href="#">Dancing</a>
                </li>
                <li>
                    <a href="#">Guitar</a>
                </li>
                <li>
                    <a href="#">Painting</a>
                </li>
                <li>
                    <a href="#">Martial arts</a>
                </li>
                <li>
                    <a href="#">Driving</a>
                </li>
            </ul>
        </div>
    );
}
export default Nav;