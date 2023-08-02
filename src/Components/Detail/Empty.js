import { useParams } from "react-router-dom"

export default function Empty(){
    const {id}=useParams()
    return(
        <div>
            <h1>There is no itme with id {id}</h1>
        </div>
    )
}