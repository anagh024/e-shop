import { useSelector } from 'react-redux'

import Option from "../Filter/Input/Option";
import style from './mobile.module.css'
import Input from '../Filter/Input/Input';
import Slider from '../Filter/Slider/Slider';
export default function MobileOptions(){
    let category=useSelector((state)=>(state.filter.category))
    console.log(category)
    category=Object.keys(category)
    return(
        <div className={style.main}>
        <Input></Input>
         <div>
         {category.map((i,j)=>(<Option name={i} key={j}></Option>))}
         </div>
         <Slider></Slider>
        </div>
    )
}