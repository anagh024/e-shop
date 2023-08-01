import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

export default function Option({name}){
    const [searchPrams,setSearchPrams]=useSearchParams()
    const dispatch=useDispatch()
    const filter=useSelector((state)=>(state.filter.category))
    useEffect(()=>{
       // console.log(Object.keys(filter).filter((i)=>filter[i]=true).length===a.length)
       
        for(let a of Object.keys(filter)){
            console.log(Object.keys(filter).filter((i)=>filter[i]=true).length===Object.keys(filter).length)
        }
    })
    return(
        <div>
            <div>
                <input type="checkbox" onClick={
                    (e)=>{

                      if(e.target.checked){
                      searchPrams.append('category',name)
                      setSearchPrams(searchPrams)
                      dispatch({type:'category/change',payload:{[name]:true}})
                      if(true){
                      dispatch({type:'data/single-check',payload:name})
                    }
                      }
                      else{
                        searchPrams.delete('category',name)
                        setSearchPrams(searchPrams)
                        dispatch({type:'category/change',payload:{[name]:false}})
                      }
                      }
                    }
            ></input>
                <span>{name?name:'n/a'}</span>
            </div>
        </div>
    )
}