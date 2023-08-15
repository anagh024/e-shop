import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { checker } from "./checker"
import checklogic from "./checklogic"

export default function Option({name}){
    const [searchPrams,setSearchPrams]=useSearchParams()
    const[render,setRerender]=useState(true)
    const dispatch=useDispatch()
    let result=[]
    const[checked,setCheck]=useState(false)
    const filter=useSelector((state)=>(state.filter.category))
    //console.log(filter)
    Object.keys(filter).forEach((i)=>{
        result.push(filter[i])
    })
    useEffect(()=>{
        if(!searchPrams.has('name')&&!searchPrams.has('price')&&!Object.values(filter).filter((i)=>i===true).length<1){
        dispatch({type:'data/multipleCategory',payload:Object.keys(filter).filter((i)=>(filter[i]===true))})}
        else if((searchPrams.has('name')||searchPrams.has('price'))&&Object.values(filter).filter((i)=>i===true).length===1&&checked){
            dispatch({type:'data/otherPlusCategorySingle',payload:{query:searchPrams.get('name'),category:name}})
            
        }
        else if((searchPrams.has('name'))&&Object.values(filter).filter((i)=>i===true).length>1){
            dispatch({type:'data/otherPlusCategoryMultiple',payload:{query:searchPrams.get('name'),array:Object.keys(filter).filter((i)=>(filter[i]===true))}})
            
        }
        else if(searchPrams.has('name')&&Object.values(filter).filter((i)=>i===true).length===0){
            dispatch({type:'data/query-check',payload:searchPrams.get('name')})
        }
        // console.log(Object.values(filter).filter((i)=>i===true))
        else if(!searchPrams.has('name')&&Object.values(filter).filter((i)=>i===true).length===0){
            dispatch({type:'data/load-all'})
            //console.log('dispatched')
        }
    },[filter])
    return(
        <div>
            <div>
                <input type="checkbox" 
                checked={filter[name]}
                onChange={(e)=>{
                  dispatch({type:'category/change',paylaod:{[name]:!filter[name]}})
                  
                  if(e.target.checked){
                    setCheck(true)
                    if(!searchPrams.has('name')&&!searchPrams.has('price')&&Object.values(filter).filter((i)=>i===true).length<1){
                  dispatch({type:'data/categorey',payload:name})
                  
                }

                    
                  }else if(!searchPrams.has('name')&&Object.values(filter).filter((i)=>i===true).length===0){
                    dispatch({type:'data/load-all'})
                    console.log('dispatched')
                }
                }}
            ></input>
                <span>{name?name:'n/a'}</span>
            </div>
        </div>
    )
}