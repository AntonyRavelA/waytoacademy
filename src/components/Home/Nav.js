import React from 'react';
import './App.css';

import './Home.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/" className="active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link  to="/Home/chess">
                        Yoga
                    </Link>
                </li>                            
            </ul>
        </div>
    );
}
export default Nav;