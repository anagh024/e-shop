import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

export default function Input(){
    const searchPrams=useSearchParams()
    const dispatch=useDispatch()
    const nav=useNavigate()
    const value=useSelector((state)=>(state.filter.query))
    console.log(value)
    return(
        <div className="search">
            <input type="text" onChange={(e)=>{
                dispatch({type:'query/change',payload:e.target.value})

            }} value={value}></input>
            <button onClick={()=>{
            if(value){
                
            nav({pathname:'/',search:`?${createSearchParams({name:value})}`})
            
        }
            else{
                nav('/')
               
            }
            }}>&#x1F50D;</button>
        </div>
    )
}