import React from 'react';
import './Home.css';
import Image from './Images';
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={Image.yoga} className="borderImg" />
                        <h3>Yoga class</h3>
                        <p>City's best yoga class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={Image.cooking} className="borderImg" />
                        <h3>Cooking class</h3>
                        <p>City's best cooking class. Hurry up, sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={Image.gym} className="borderImg" />
                        <h3>Gym class</h3>
                        <p>City's best dancing class. Hurry up, sign up quickly!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={Image.chess} className="borderImg" />
                        <h3>Chess class</h3>
                        <p>City's best guitar class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={Image.boxing} className="borderImg" />
                        <h3>Boxing class</h3>
                        <p>City's best painting class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={Image.driving} className="borderImg" />
                        <h3>Driving class</h3>
                        <p>City's best Martial-arts class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-4">
                    <img src={driving} className="borderImg" />
                    <h3>Driving class</h3>
                </div>
            </div> */}
        </div>
    );
}

export default Home;