import style from './mobile.module.css'
export default function Mtotal(){
    return(
        <div className={style.main}>
            <span>Total:<span>&#8377;</span></span>
            <button onClick={()=>{
                 alert('Thanks for shopping with us')
            }}>Checkout</button>
        </div>
    )
}