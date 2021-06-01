import content from './Content';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Template.css';
import Nav from '../Home/Nav';
const Temp = () => {
    const {producttype} = useParams();
    console.log(producttype);
    let products = [...content] ; 
    if(producttype){      
        products = products.filter(product => product.ClassType === producttype)
    }  
    
    return(
        <div> 
            <Nav />
        {/* <div className="tempcls"> */}
        <div className="rows">
        {products.map(prod => 
        <div className="col-4">
            <div className="cards" >
            <Link to ={{pathname:`/Home/${producttype}/${prod.Img_ID}`}} >
                <img src={prod.Img_Src} className="borderImg"/>
            </Link>
                <p style={{textAlign:"center"}}>{prod.caption}</p> 
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