import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

export default function Root(){
    return(
        <div className="root-div">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}