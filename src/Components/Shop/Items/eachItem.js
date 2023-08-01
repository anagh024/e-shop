import { useSelector } from "react-redux"
import style from './eachitem.module.css'
export default function EachItem({items}){
return(
    <div className={style.main}>
        <img src={items.src}></img>
        <div className={style.bottom}>
        <span>{items.name}</span>
        <span>{items.price}</span>
        <input></input>
        <button>Add</button>
        </div>
    </div>
)
}