import { useSelector } from 'react-redux'

import Option from "../Filter/Input/Option";
import style from './mobile.module.css'
import Input from '../Filter/Input/Input';
import Slider from '../Filter/Slider/Slider';
export default function MobileOptions({show,setShow}){
    let category=useSelector((state)=>(state.filter.category))
    
    category=Object.keys(category)
    return(
        <div className={style.main}>
            <button onClick={()=>{
setShow(false)
            }}>&#10060;</button>
        <Input></Input>
         <div>
         {category.map((i,j)=>(<Option name={i} key={j}></Option>))}
         </div>
         <Slider></Slider>
        </div>
    )
}