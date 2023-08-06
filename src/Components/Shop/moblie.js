import { useNavigate } from 'react-router-dom'
import src from '../../pngwing.com.png'
import src_t from '../../pngwing1.com.png'
import MobileOptions from './mobileoption/mobileoption'
import { useState } from 'react'
export default function Mobile(){
    const nav=useNavigate()
    const[show,setShow]=useState(false)
    return(
        <div className="mobile-filter">
            
           <button className='border-color'
           onClick={()=>{
            setShow(true)
           }}
           ><i class="fa fa-filter"style={{fontSize:'40px'}}></i>
           
           </button> 
           {show?
           <div className='search-bar-mobile'>
               <MobileOptions show={show} setShow={setShow} ></MobileOptions>
           </div>:null}
            <button><i class="fa fa-shopping-cart" style={{fontSize:'40px'}} onClick={()=>{
                nav('/cart')
            }}></i></button>
            
        </div>
    )
}