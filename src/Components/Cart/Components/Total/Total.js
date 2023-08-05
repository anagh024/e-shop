import { useSelector } from 'react-redux'
import style from './total.module.css'
import arryconv from '../arrayconverter'

export default function Total(){
    let total=0
    let items=useSelector((state)=>state.cart)
    items=arryconv(items)
    items.forEach((i)=>{total+=i.price})
    return(
        <div>
        <div className={style.main}>
            <div className={style.inner}>
           <span className={style.heading}>Your Order Total</span>
           
           {items.length!==0?items.map((i)=><div className={style.items}>
            <span>{i.name}:</span>
            <span>&#8377;{i.price}</span>
            </div>):<span>Currently empty</span>}
            
            
        </div>
        <span className={style.total}>Total: <span className={style.red}>&#8377;{total}</span></span>
        </div>
        </div>
    )
}