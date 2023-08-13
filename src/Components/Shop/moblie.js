import { useNavigate, useSearchParams } from 'react-router-dom'
import src from '../../pngwing.com.png'
import src_t from '../../pngwing1.com.png'
import MobileOptions from './mobileoption/mobileoption'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Mobile(){
    const nav=useNavigate()
    const[searchPrams,setSeachPrams]=useSearchParams()
    const dispatch=useDispatch()
    const[show,setShow]=useState(false)
    return(
        <div className="mobile-filter">
            
           <button className='border-color'
           onClick={()=>{
            dispatch({type:'data/load-all'})
            setSeachPrams({})
            
            setShow(true)
           }}
           ><i class="fa fa-filter"style={{fontSize:'40px'}}></i>
           
           </button> 
           {show?
           <div className='search-bar-mobile'>
               <MobileOptions show={show} setShow={setShow}  ></MobileOptions>
           </div>:null}
            <button className='border-colorr' onClick={()=>{
                nav('/cart')
            }}><i class="fa fa-shopping-cart" style={{fontSize:'40px'}}></i></button>
            
        </div>
    )
}