
import CartItem from './Components/CartItem'
import Mtotal from './Components/Total/Mtotal'
import Total from './Components/Total/Total'
import style from './cart.module.css'
export default function Cart(){
    return(
        <div className={style.main}>
            
            <CartItem></CartItem>
            <Total></Total>
            {false?<Mtotal></Mtotal>:null}
        </div>
    )
}