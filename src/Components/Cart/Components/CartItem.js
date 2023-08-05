import { useSelector } from 'react-redux'
import style from './item.module.css'
import EachCartItem from './eachItem/EachCartItem'
import arryconv from './arrayconverter'
export default function CartItem(){
    let items=useSelector((state)=>state.cart)
    items=arryconv(items)
    //console.log(items)
    
    return(
        <div>
            
            {items.length!==0?items.map((i,k)=>{
                console.log(i.name)
            return <EachCartItem key={k} src={i.src} price={i.price}name={i.name} quantity={i.quantity}></EachCartItem>}):<span>No items</span>}
        </div>
    )
}