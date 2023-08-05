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
        
        <span>&#8377; {items.price}</span>
        {/* <button onClick={()=>{
            dispatch({type:'cart/add-items',payload:items})
            
        }}>Add</button> */}
        </div>
    </div>
)
}