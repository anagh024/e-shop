import { useNavigate } from 'react-router-dom'
import src from '../../pngwing.com.png'
import src_t from '../../pngwing1.com.png'
import MobileOptions from './mobileoption/mobileoption'
export default function Mobile(){
    const nav=useNavigate()
    return(
        <div className="mobile-filter">
            
           <button className='border-color'><i class="fa fa-filter"style={{fontSize:'40px'}}></i>
           
           </button> 
           <div className='search-bar-mobile'>
               <MobileOptions></MobileOptions>
           </div>
            <button><i class="fa fa-shopping-cart" style={{fontSize:'40px'}} onClick={()=>{
                nav('/cart')
            }}></i></button>
            
        </div>
    )
}