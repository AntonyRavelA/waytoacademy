import {useEffect, useState} from 'react';
import content from './Content';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Template.css';
import Nav from '../Home/Nav';
import Axios from 'axios';
const Temp = () => {
    const {producttype} = useParams();
    const [value, setvalue] = useState([]);
    console.log(producttype);
    let products = [...content] ; 
    // if(producttype){      
    //     products = products.filter(product => product.ClassType === producttype)
    // }  
    useEffect(()=>{
        Axios.post("http://localhost:5000/classes",{producttype : producttype}).then((Response)=>{
            console.log("Res",Response);
            setvalue(Response.data); 
                    
        },);
    },[]);
    return(
        <div> 
            {/* <Nav /> */}
        {/* <div className="tempcls"> */}
        <div className="rows">
        {value.map(prod => 
        <div className="col-4">
            <div className="cards" >
            <Link to ={{pathname:`/Home/${producttype}/${prod.ID}`}} >
                <img src={prod.ImageSrc} alt = "here it is" className="borderImg" />
            </Link>
                <p style={{textAlign:"center"}}>{prod.Caption}</p> 
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
    );
}

export default Temp