import React from 'react';
import './App.css';

function Button() {
    return (
        <div>
            <div style={{ marginLeft: '15px', marginTop: '30px' }}>
                <button className="Day-button">Sat</button>
                <button className="Day-button">Sun</button>
                <button className="Day-button">Mon</button>
                <button className="Day-button">Tue</button>
                <button className="Day-button">Wed</button>
                <button className="Day-button">Thu</button>
                <button className="Day-button">Fri</button>
            </div>
            <div style={{ marginLeft: '45px', marginTop: '30px' }}>
                <h2>See kids classes </h2>

            </div>
        </div>
    );
}
export default Button;