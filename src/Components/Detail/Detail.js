import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Empty from "./Empty"
import Product from "./Produc"
export default function Detail(){
    const pram=useParams()
    let item=useSelector((state=>(state.data)))
    item=item.filter((i)=>i.id===Number(pram.id))
    return(<div>
        {item[0]?<Product item={item}></Product>:<Empty></Empty>}
        </div>
    )
}