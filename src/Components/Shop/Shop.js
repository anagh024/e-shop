import Filter from "./Filter/Filter";
import Item from "./Items/item";
import Mobile from "./moblie";

export default function Shop(){
    return(
        <div className="shop">
            <Mobile></Mobile>
            <Filter></Filter>
            <Item></Item>
        </div>
    )
}