import { useNavigate } from "react-router-dom";
import Input from "./Input/Input";
import Option from "./Input/Option";
import Sslider from "./Slider/SSlider";
import Slider from "./Slider/Slider";

export default function Filter(){
    const nav=useNavigate()
    let options=['toys','HAcking','Sifi']
    return(
        <div  className="filterdiv">
         <div className="inside">
            <Input></Input>
            <div className="checkbuttonsdiv">
            {options.map((i,j)=>(<Option name={i} key={j}></Option>))}
            </div>
            <div className="inpu">
            <Slider></Slider>
            <Sslider></Sslider>
            </div>
            <button onClick={()=>{
            nav('/cart')
            }}>Cart</button>
            </div>
        </div>
    )
}