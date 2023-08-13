import { useSelector } from 'react-redux'
import style from './item.module.css'
import EachCartItem from './eachItem/EachCartItem'
import arryconv from './arrayconverter'
import arraydounle from './arraydounle'
export default function CartItem(){
    let items=useSelector((state)=>state.cart)
    items=arryconv(items)
    items=arraydounle(items)
    
    console.log(items)

    
    return(
        <div>
            
            {items.length!==0?items.map((i,k)=>{
                console.log(i)
            return <EachCartItem key={k} src={i.src} price={i.price}name={i.name} quantity={i.orderquantity}></EachCartItem>}):<span>No items</span>}
        </div>
    )
}