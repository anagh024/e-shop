import { useSelector } from "react-redux";
import EachItem from "./eachItem";
import ItemError from "./itemError";
import { Logic } from "./logic";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export default function Item(){
    const [searchPrams]=useSearchParams()
    useEffect(()=>{
       // console.log(searchPrams.get('name')+" this is prmas")
    })
    let toys=useSelector((state)=>state)
    toys=[...Object.keys(toys).map((i)=>{
        return toys[i]})]





    toys=toys.filter((i)=>(Array.isArray(i)))
    //console.log(toys)
    const items=[...new Set(toys.flat())]
    console.log(items)
    return (
        <div className="productsec" style={{gridTemplateColumns:' 1fr 1fr 1fr'}}>
            {items.length!==0?items.map((i,k)=>(<EachItem items={i} key={k}></EachItem>)):<ItemError></ItemError>}
        </div>
    )
}