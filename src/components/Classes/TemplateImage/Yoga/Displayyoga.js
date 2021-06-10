// import React from 'react';
// import '../Display.css';
// import Logo from '../../../Navigation/logo.jpg';
// class Yoga_Display extends React.Component{
//     render(){  
//         const ID = this.props.location.Props.id;
//         let IMAGE;
//         let Content;
//         // Required Image Files :
//         const img1 = require('./yoga1.jpg').default;
//         const img2 = require('./yoga2.jpg').default;
//         const img3 = require('./yoga3.jpg').default;
//         const img4 = require('./yoga4.jpg').default;
//         const img5 = require('./yoga5.jpg').default;
//         const img6 = require('./yoga6.jpg').default;
//         // Required Contents To Display :
//         const Content1 = {
//             Location : "Anna Nagar",
//             Timmings : "10.00 AM - 5.00 PM",
//             Price : "$25 per month",
//             Requirement : "16 or older",
//             Experience : "Not Required",
//             Cost : "$25 for class",

//         }
//         const Content2 = {
//             Location : "KK Nagar",
//             Timmings : "12.00 AM - 5.00 PM",
//             Price : "$35 per month",
//             Requirement : "18 or older",
//             Experience : "Not Required",
//             Cost : "$35 for class",

//         }
//         const Content3 = {
//             Location : "Padi",
//             Timmings : "10.00 AM - 5.00 PM",
//             Price : "$25 per month",
//             Requirement : "15 or older",
//             Experience : "Minimum 1 year Required",
//             Cost : "$25 for class",

//         }
//         const Content4 = {
//             Location : "T-Nagar",
//             Timmings : "10.00 AM - 5.00 PM",
//             Price : "$15 per month",
//             Requirement : "16 or older",
//             Experience : "Not Required",
//             Cost : "$25 for class",

//         }
//         const Content5 = {
//             Location : "Madipakkam",
//             Timmings : "10.00 AM - 5.00 PM",
//             Price : "$25 per month",
//             Requirement : "18 or older",
//             Experience : "Not Required",
//             Cost : "$25 for class",

//         }
//         const Content6 = {
//             Location : "Adambakkam",
//             Timmings : "9.00 AM - 12.00 PM",
//             Price : "$15 per month",
//             Requirement : "16 or older",
//             Experience : "Not Required",
//             Cost : "$15 for class",
//         }
//         // Condition For IMAGE and Content to be Displayed :
//         if(ID === "1"){
//             IMAGE = img1;
//             Content = Content1;
//         }
//         if(ID === "2"){
//             IMAGE = img2;
//             Content = Content2;
//         }
//         if(ID === "3"){
//             IMAGE = img3;
//             Content = Content3;
//         }
//         if(ID === "4"){
//             IMAGE = img4;
//             Content = Content4;
//         }
//         if(ID === "5"){
//             IMAGE = img5;
//             Content = Content5;
//         }
//         if(ID === "6"){
//             IMAGE = img6;
//             Content = Content6;
//         }
//         // Parameters to Be Displayed :
//         console.log(ID);
//         console.log(`Img file : ${IMAGE}`);
//         console.log(`Content file : ${Content}`);
//         function Alert(){
//             alert("!! You have Joined !!");
//         }
//         const style = {
//             backgroundColor : "snow",
//             paddingLeft : 40
//         }
//         return(
//             <div>
//                 <div className="header" style={style}> 
//                     <p className="plogo">CLASS M<span><img src={Logo} className="logo"/></span>NK</p> 
//                 </div> 
//               <div className = "ImageDiv">
//                   <img src = {IMAGE} alt = "is here" />        
//               </div>
//               <div className = "ContentDiv">
//                   <p><font><b>Nambi Vaanga Sandhosama Ponga !!</b></font></p>
//                   <p><b>Location :</b></p>
//                   <p><span><b>{Content.Location}</b></span></p>
//                   <p><b>Pricing :</b></p>
//                   <p><span><b>{Content.Price}</b></span></p>
//                   <p><b>Age Requirement :</b></p>
//                   <p><span><b>{Content.Requirement}</b></span></p>  
//                   <p><b>Previous Experience :</b></p>
//                   <p><span><b>{Content.Experience}</b></span></p>  
//               </div>
            //   <div className = "FooterDiv">
//                    <p><b>Available Timmings</b></p>
//                     <b><p><span>{Content.Timmings}</span></p></b> 
//                     <b><p style = {{marginLeft : 35}}><span>{Content.Cost}</span></p></b>      
//                </div>
//                <div className = "BUTTON">
//                         <button onClick = {Alert}>Join Class</button>
//                     </div>
//             </div>
//         );
//         };
// }
// export default Yoga_Display;