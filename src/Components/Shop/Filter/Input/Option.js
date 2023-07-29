import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

export default function Option({name}){
    const [searchPrams,setSearchPrams]=useSearchParams()
    const dispatch=useDispatch()
    const obj={}
    obj.type='category/change'
    obj.payload={}
    obj.payload[name]=true
    const filter=useSelector((state)=>(state.filter.category))
    useEffect(()=>{
        
    })
    return(
        <div>
            <div>
                <input type="checkbox" onClick={
                    (e)=>{
                        //console.log(e.target.checked)
                      if(e.target.checked){
                      searchPrams.append('category',name)
                      setSearchPrams(searchPrams)
                      dispatch(obj)
                      obj.payload[name]=false
                      }
                      else{
                        dispatch(obj)
                         searchPrams.delete('category',name)
                         setSearchPrams(searchPrams)
                         obj.payload[name]=false
                      }
                      }
                    }
            ></input>
                <span>{name?name:'n/a'}</span>
            </div>
        </div>
    )
}