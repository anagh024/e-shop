import { useDispatch, useSelector } from "react-redux";
import EachItem from "./eachItem";
import ItemError from "./itemError";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export default function Item(){
    const [searchPrams,setSearchPrams]=useSearchParams()
    window.onload=()=>{(setSearchPrams([]))}
    let toys=useSelector((state)=>state.data)

    return (
        <div className="productsec">
            {toys.length!==0?toys.map((i,k)=>(<EachItem items={i} index={k} key={k}></EachItem>)):<ItemError></ItemError>}
        </div>
    )
}