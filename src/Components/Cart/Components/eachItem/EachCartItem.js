import { useDispatch } from 'react-redux'
import style from './eachCartItem.module.css'
import { useEffect, useState } from 'react'
export default function EachCartItem({name,price,quantity,src}){
    const dispatch=useDispatch()
    
    const [value,setValue]=useState('')
    
    useEffect(()=>{
    dispatch({type:'cart/changeQuantity',payload:{name:name,quantity:value}})

    },[value])
    
    return(
        <div className={style.main}>
            <img src={src}></img>
        
            <div className={style.detail}>
            <span className={style.name}>{name}</span>
            <span className={style.price}>&#8377;{price}</span>
            <div className={style.line}></div>
            
            <span className={style.quna}>Qyt.:{quantity}</span>
            
                {/* <button onClick={()=>{
                    setValue(Number(value)+1)
                }}>+</button>
            <span>
                <input  value={value} 
            onChange={(e)=>{
                 
                 if(Number(e.target.value)){
                            setValue(e.target.value)
                    dispatch({type:'cart/increaseQuantity',payload:{name:name,quantity:value}})
                 }
                 
                 else if(Number(e.target.value)<10){
                   setValue('')
                 }
                 
            }} 
            
            ></input>
             </span>
            <button onClick={()=>{
                if(value>1){
                setValue(Number(value)-1)}
            }}>-</button> */}
            
            <button className={style.remove} onClick={()=>{
                
                dispatch({type:'cart/remove-items',payload:name})
            }}>Remove</button>
            </div>
          
        </div>
    )
}