import { useDispatch } from 'react-redux'
import style from './eachCartItem.module.css'
export default function EachCartItem({name,price,quantity,src}){
    const dispatch=useDispatch()
    console.log(name)
    return(
        <div className={style.main}>
            <img src={src}></img>
        
            <div className={style.detail}>
            <span>{name}</span>
            <span className={style.price}>&#8377;{price}</span>
            <div className={style.quantity}>
            <span>Qyt.-{quantity}</span>
            
                <button>+</button>
            <span><input></input></span>
            <button>-</button>
            </div>
            <button className={style.remove} onClick={()=>{
                
                dispatch({type:'cart/remove-items',payload:name})
            }}>Remove</button>
            </div>
          
        </div>
    )
}