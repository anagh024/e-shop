import { useSelector } from "react-redux"
import style from './eachitem.module.css'
export default function EachItem({items}){
return(
    <div className={style.main}>
        <img src={items.src}></img>
        <span>{items.name}</span>
        <span>{items.price}</span>
    </div>
)
}