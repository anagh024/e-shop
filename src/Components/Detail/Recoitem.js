import { useNavigate } from 'react-router-dom'
import style from './recoitem.module.css'
export default function Recoitem({items}){
    const nav=useNavigate()
    return(
        <div className={style.main} onClick={()=>{
          nav(`/${items.id}`)
        }}>
        <img src={items.src}></img>
        <div className={style.bottom}>
        <span>{items.name}</span>
        <span>&#8377; {items.price}</span>
        </div>
    </div>
    )
}