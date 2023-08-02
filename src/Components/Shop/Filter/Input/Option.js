import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { checker } from "./checker"

export default function Option({name}){
    const [searchPrams,setSearchPrams]=useSearchParams()
    const dispatch=useDispatch()
    let result=[]
    const filter=useSelector((state)=>(state.filter.category))
    Object.keys(filter).forEach((i)=>{
        result.push(filter[i])
    })
    //console.log(result)
    result=checker(result)
    useEffect(()=>{
       // console.log(Object.keys(filter).filter((i)=>filter[i]=true).length===a.length)
       
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
                      if(!result){
                      dispatch({type:'data/single-check',payload:name})
                    }
                    else{
                        dispatch({type:'data/multi-check',payload:name})
                    }
                      }
                      else{
                        searchPrams.delete('category',name)
                        setSearchPrams(searchPrams)
                        dispatch({type:'category/change',payload:{[name]:false}})
                        if(!searchPrams.has('category')){
                         dispatch({type:'data/load-all'})
                        }
                        else{
                        dispatch({type:'data/uncheck-multi',payload:name})
                      }}
                      }
                    }
            ></input>
                <span>{name?name:'n/a'}</span>
            </div>
        </div>
    )
}