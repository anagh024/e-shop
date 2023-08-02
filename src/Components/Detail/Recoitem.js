import style from './recoitem.module.css'
export default function Recoitem({items}){
    return(
        <div className={style.main}>
        <img src={items.src}></img>
        <div className={style.bottom}>
        <span>{items.name}</span>
        <span>&#8377; {items.price}</span>
        </div>
    </div>
    )
}