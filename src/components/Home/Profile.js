import React from 'react';
import './App.css';
import cooking from './images/cooking.jpg';
function Profile() {
    return (
        <div className="profile">
            <img src={cooking} alt="profile photo" className="avatar" />
            <div style={{ marginLeft: '1330px', marginTop: '-80px' }}>
                <h3>Saved classes</h3>
            </div>
        </div>
    );
}
export default Profile;