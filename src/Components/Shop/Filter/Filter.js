import { useNavigate } from "react-router-dom";
import Input from "./Input/Input";
import Option from "./Input/Option";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";

export default function Filter(){
    const nav=useNavigate()
    let options=useSelector((state)=>(state.filter.category))
    //console.log(options);
    options=Object.keys(options)

    return(
        <div  className="filterdiv">
         <div className="inside">
            <Input></Input>
            <div className="checkbuttonsdiv">
            {options.map((i,j)=>(<Option name={i} key={j}></Option>))}
            </div>
            
            <button onClick={()=>{
            nav('/cart')
            }}>Cart</button>
            </div>
        </div>
    )
}