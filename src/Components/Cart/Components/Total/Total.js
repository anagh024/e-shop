import { useSelector } from 'react-redux'
import style from './total.module.css'
import arryconv from '../arrayconverter'
import single from '../arraydounle'
import { useNavigate } from 'react-router-dom'

export default function Total(){
    const nav=useNavigate()
    let total=0
    let items=useSelector((state)=>state.cart)
    items=arryconv(items)
    items=single(items)
    items.forEach((i)=>{
    
        
        total+=i.price*i.orderquantity})
        //console.log(items)
    return(

        <div>
        <div className={style.main}>
            <div className={style.inner}>
           <span className={style.heading}>Your Order Total</span>
           
           {items.length!==0?items.map((i)=><div className={style.items}>
            <span>{i.name}&times;{i.orderquantity}:</span>
            <span>&#8377;{i.price*i.orderquantity}</span>
            </div>):<span>Currently empty</span>}
            
            
        </div>
        <span className={style.total}>Total: <span className={style.red}>&#8377;{total}</span></span>
        <div className={style.buttons}>
            <button onClick={()=>{
                 nav('/')
            }}>Browse More</button>
            <button onClick={()=>{
                alert('Thanks for shopping with us')
            }}>Checkout</button>
        </div>
        </div>
        
        </div>
    )
}