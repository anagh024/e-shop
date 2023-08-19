import style from './mobile.module.css'
import { useSelector } from 'react-redux'
import arryconv from '../arrayconverter'
import single from '../arraydounle'
export default function Mtotal(){
    let total=0
    let items=useSelector((state)=>state.cart)
    items=arryconv(items)
    items=single(items)
    items.forEach((i)=>{
    
        
        total+=i.price*i.orderquantity})
    return(
        <div className={style.main}>
            <span>Total:<span>&#8377;{total}</span></span>
            <button onClick={()=>{
                 alert('Thanks for shopping with us')
            }}>Checkout</button>
        </div>
    )
}