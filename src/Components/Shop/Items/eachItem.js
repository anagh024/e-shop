import { useDispatch, useSelector } from "react-redux"
import style from './eachitem.module.css'
import { useNavigate } from "react-router-dom"
export default function EachItem({items,index}){
    const nav=useNavigate()
    const dispatch=useDispatch()
return(
    <div className={style.main} tabIndex={index} onClick={()=>{nav(`/${items.id}`)}}>
        <img src={items.src}></img>
        <div className={style.bottom}>
        <span>{items.name}</span>
        
        <span style={items.price?null:{color:'red'}}><span style={items.price?null:{display:'none'}}>&#8377;</span> {items.price?items.price:'Out of Stock'}</span>
        
        </div>
    </div>
)
}