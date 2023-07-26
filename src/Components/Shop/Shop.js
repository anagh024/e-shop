import Filter from "./Filter/Filter";
import Item from "./Items/item";

export default function Shop(){
    return(
        <div className="shop">
            <Filter></Filter>
            <Item></Item>
        </div>
    )
}