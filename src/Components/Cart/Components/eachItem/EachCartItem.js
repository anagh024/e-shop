import style from './eachCartItem.module.css'
export default function EachCartItem({name,price,quantity,src}){
    console.log(name)
    return(
        <div className={style.main}>
            <img src={src}></img>
        
            <div className={style.detail}>
                
                <span>{name?name:'n/a'}</span>
                <span>&#8377;{price?price:'n/a'}</span>
            </div>
          
        </div>
    )
}