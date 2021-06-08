import React, { useEffect, useState } from 'react';
import './Home.css';
import Image from './Images';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Nav from './Nav'
const Home = () => {
    const [name ,setname] = useState([]);
    // function Sample(producttype){
    //     Axios.post("http://localhost:5000/classes",{producttype : producttype}).then(()=>{
    //         alert("Superrr");
    //     });
    useEffect(()=>{
        Axios.get("http://localhost:5000/Home").then((Response)=>{
            setname(Response.data);
        });
    },[]);
    // console.log("VALUE",name[1].ID);
    // console.log(typeof(name))
    // let O = Object.assign({}, name);
    // console.log(O);
    var result = Object.keys(name).map((key) => name[key]);
    console.log(result);
    return (
        <div className="container"> 
            {/* <Nav /> */}
        {/* <div className="tempcls"> */}
        <div className="row">
        {name.map(prod => 
        <div className="col-4">
            <div className="card" >      
            <Link to={location => `/Home/${prod.ImageName}`}>
                    <img src={prod.ImageSrc} alt = "here !!" className="borderImg" />
             </Link>
                    <h3>{prod.ImageName}</h3>
               <p>{prod.ID}</p>
            </div>
            </div>
           
            // <div key={prod.Img_ID} className="productlist">           
            //     <Link to ={{pathname:`/Home/${producttype}/${prod.Img_ID}`}} >        
            //     <img src={prod.Img_Src} className="img"/> 
            //     </Link>
            //     <p className="para">{prod.caption}</p> 
            
            
            
        
        )}
        </div>
              
    </div>
        // <div className="container">
        //     <Nav />
        //     <div className="row">
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/yoga" >
        //                 <img src={Image.yoga} className="borderImg" />
        //             </Link>
        //                 <h3>Yoga class</h3>
        //                 <p>City's best yoga class. Hurry up ,sign up quickly!</p>
        //             </div>
        //         </div>
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/cooking" >
        //                 <img src={Image.cooking} className="borderImg" />
        //             </Link>
        //                 <h3>Cooking class</h3>
        //                 <p>City's best cooking class. Hurry up, sign up quickly!</p>
        //             </div>
        //         </div>
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/gym" >
        //                 <img src={Image.gym} className="borderImg" />
        //             </Link>
        //                 <h3>Gym class</h3>
        //                 <p>City's best gym class. Hurry up, sign up quickly!</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/chess" >
        //                 <img src={Image.chess} className="borderImg" />
        //             </Link>
        //                 <h3>Chess class</h3>
        //                 <p>City's best guitar class. Hurry up ,sign up quickly!</p>
        //             </div>
        //         </div>
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/boxing" >
        //                 <img src={Image.boxing} className="borderImg" />
        //             </Link>
        //                 <h3>Boxing class</h3>
        //                 <p>City's best painting class. Hurry up ,sign up quickly!</p>
        //             </div>
        //         </div>
        //         <div className="col-4">
        //             <div className="card">
        //             <Link to="/Home/driving" >
        //                 <img src={Image.driving} className="borderImg" />
        //             </Link>
        //                 <h3>Driving class</h3>
        //                 <p>City's best Martial-arts class. Hurry up ,sign up quickly!</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Home;