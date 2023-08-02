import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

export default function Input(){
    const [searchPrams,setSearchPrams]=useSearchParams()
    const dispatch=useDispatch()
    const nav=useNavigate()
    const value=useSelector((state)=>(state.filter.query))
   // console.log(value)
    return(
        <div className="search">
            <input type="text" onChange={(e)=>{
                dispatch({type:'query/change',payload:e.target.value})
                if(e.target.value===''){
                    dispatch({type:'data/load-all'})
                    searchPrams.delete('name')
                setSearchPrams(searchPrams)
                }

            }} value={value}
            
            ></input>

            <button onClick={()=>{
            if(value){
            searchPrams.set('name',value)
            setSearchPrams(searchPrams)
             dispatch({type:'data/query-check',payload:value})
        }
            else{
                searchPrams.delete('name')
                setSearchPrams(searchPrams)
                dispatch({type:'data/load-all'})
               
            }
            }}>&#x1F50D;</button>
        </div>
    )
}