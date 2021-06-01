import React from 'react';
import content from './Content';
import {useParams} from 'react-router-dom';
import './Template.css';
const Display = (props) => {
        console.log("hi");    
        let {id} = useParams();
        id = Number(id);
        
       console.log(`Content file : ${typeof(id)}`);
        let Details = [...content];
        if(true){
            Details =  Details.filter(detail => detail.Img_ID === id);
        }
        console.log(Details);
           
        function Alert(){
            alert("!! You have Joined !!");
        }
        return(
            <div>
                {/* <HEADER/> */}
                {Details.map(detail =>
                <div key={detail.Img_ID}> 
                    <div className = "ImageDiv">
                    <img src = {detail.Img_Src} alt = "is here" width = "450" height = "450"/>        
                </div>
                <div className = "ContentDiv">
                    <p><font><b>Nambi Vaanga Sandhosama Ponga !!</b></font></p>
                    <p><b>Location :</b></p>
                    <p><span><b>{detail.Location}</b></span></p>
                    <p><b>Pricing :</b></p>
                    <p><span><b>{detail.Price}</b></span></p>
                    <p><b>Age Requirement :</b></p>
                    <p><span><b>{detail.Requirement}</b></span></p>  
                    <p><b>Previous Experience :</b></p>
                    <p><span><b>{detail.Experience}</b></span></p>  
                </div>
                <div className = "FooterDiv">
                     <p><b>Available Timmings</b></p>
                      <b><p><span>{detail.Timmings}</span></p></b> 
                      <b><p style = {{marginLeft : 35}}><span>{detail.Cost}</span></p></b>      
                 </div>
                 <div className = "BUTTON">
                          <button onClick = {Alert}>Join Class</button>
                      </div>
                </div>
                    )}
        </div>
        );
         
}
export default Display;