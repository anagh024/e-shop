import { useDispatch, useSelector } from "react-redux"

export default function Slider(){
    const price=useSelector((state)=>state.filter.price)
    const dispatch=useDispatch()
    return(
        <div>
            <input type="range" min={2} max={10} value={price}
            onChange={(e)=>{
               dispatch({type:'price/change',payload:e.target.value})
            }}
            >
            
            </input>
            <span>{price}</span>
        </div>
    )
}