import { useSelector } from "react-redux";
import EachItem from "./eachItem";
import ItemError from "./itemError";
import { Logic } from "./logic";


export default function Item(){
    const toys=useSelector((state)=>(state.toys))
    const items=[...toys]
    return (
        <div>
            {items.length!==0?items.map((i,k)=>(<EachItem items={i} key={k}></EachItem>)):<ItemError></ItemError>}
        </div>
    )
}