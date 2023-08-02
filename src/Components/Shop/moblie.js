import { useNavigate } from 'react-router-dom'
import src from '../../pngwing.com.png'
import src_t from '../../pngwing1.com.png'
export default function Mobile(){
    const nav=useNavigate()
    return(
        <div className="mobile-filter">
            
           <button><i class="fa fa-filter"style={{fontSize:'40px'}}></i></button> 
            <button><i class="fa fa-shopping-cart" style={{fontSize:'40px'}} onClick={()=>{
                nav('/cart')
            }}></i></button>
            
        </div>
    )
}