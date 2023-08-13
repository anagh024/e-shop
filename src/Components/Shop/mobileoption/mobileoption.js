import { useSelector } from 'react-redux'

import Option from "../Filter/Input/Option";
import style from './mobile.module.css'
import Input from '../Filter/Input/Input';
import Slider from '../Filter/Slider/Slider';
export default function MobileOptions({show,setShow,check}){
    let category=useSelector((state)=>(state.filter.category))
    
    category=Object.keys(category)
    return(
        <div>
        <div className={style.outer} tabIndex={2} onClick={()=>{
            setShow(false)
        }}>
             </div>
        <div className={style.main}>
            <button className={style.cross}onClick={()=>{
setShow(false)
            }}>&#10060;</button>
            <div className={style.input}>
        <Input></Input>
        </div>
        
         <div className={style.option}>
         {category.map((i,j)=>(<Option name={i}  key={j}></Option>))}
         </div>
         <Slider></Slider>
        </div>
       
        </div>
    )
}