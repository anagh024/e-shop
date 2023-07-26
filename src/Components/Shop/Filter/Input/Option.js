export default function Option({name}){
    return(
        <div>
            <div>
                <input type="checkbox"></input>
                <span>{name?name:'n/a'}</span>
            </div>
        </div>
    )
}