import React from 'react';
import './App.css';
import cooking from './Images/cooking.jpg';
import dancing from './Images/dancing.jpg';
import guitar from './Images/guitar.jpg';
import painting from './Images/painting.jpg';
import yoga from './Images/yogo.jpg';
import martial from './Images/martial-arts.jpg';


function Container() {
    return (



        <div className="container">

            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={yoga} className="borderImg" />

                        <h3>Yoga class</h3>
                        <p>City's best yoga class. Hurry up ,sign up quickly!</p>


                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={cooking} className="borderImg" />
                        <h3>Cooking class</h3>
                        <p>City's best cooking class. Hurry up, sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={dancing} className="borderImg" />
                        <h3>Dancing class</h3>
                        <p>City's best dancing class. Hurry up, sign up quickly!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={guitar} className="borderImg" />
                        <h3>Guitar class</h3>
                        <p>City's best guitar class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={painting} className="borderImg" />
                        <h3>Painting class</h3>
                        <p>City's best painting class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={martial} className="borderImg" />
                        <h3>Martial-Arts class</h3>
                        <p>City's best Martial-arts class. Hurry up ,sign up quickly!</p>
                    </div>
                </div>
            </div>




        </div>
    );
}
export default Container;
