import { useDispatch } from 'react-redux'
import style from './eachCartItem.module.css'
import { useState } from 'react'
export default function EachCartItem({name,price,quantity,src}){
    const dispatch=useDispatch()
    const [value,setValue]=useState(quantity)
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
            <span><input  value={value} onChange={(e)=>{
                 
                 if(Number(e.target.value)){
                            setValue(e.target.value)
                    dispatch({type:'cart/increaseQuantity'})
                 }
                 else{
                   setValue('')
                 }
             }} 
            
            ></input></span>
            <button onClick={()=>{
                if(value>1){
                setValue(value-1)}
            }}>-</button>
            </div>
            <button className={style.remove} onClick={()=>{
                
                dispatch({type:'cart/remove-items',payload:name})
            }}>Remove</button>
            </div>
          
        </div>
    )
}