import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

export default function Slider(){
    const price=useSelector((state)=>state.filter.price)
    const [seachPrams,setSeachPrams]=useSearchParams()

    const dispatch=useDispatch()
    return(
        <div>
            <input type="range" min={2} max={10} 
            onChange={(e)=>{
                seachPrams.set('price',e.target.value*1000)
                setSeachPrams(seachPrams)

            dispatch({type:'data/price-check',payload:Number(e.target.value)*100})
               dispatch({type:'price/change',payload:Number(e.target.value)*1000})
               
            }}
            >
            
            </input>
            <span>{price}</span>
        </div>
    )
}