import { useSelector } from 'react-redux'
import { initialState } from '../../Store/Slices/intialState'
import style from './detail.module.css'
import EachItem from '../Shop/Items/eachItem'
import Recoitem from './Recoitem'
export default function Product({item}){
    let reco=initialState
    reco=reco.filter((i)=>(i.category===item[0].category))
    return(
        
        <div className={style.main}>
            <div className={style.details}>
                <div className={style.visuals}>
                    <div className={style.smallimages}>
                        <img src={item[0].src}></img>
                        <img src={item[0].src}></img>
                        <img src={item[0].src}></img>
                    </div>
                    <img src={item[0].src}></img>
                </div>
                
                <div className={style.textual}>
                    <span className={style.name}>{item[0].name ? item[0].name : 'N/a'}</span>
                    <p className={style.desc}><span className={style.big}>Description:-</span>{item[0].description ? item[0].description : 'N/a'}</p>
                    <span className={style.price}>&#8377;  {item[0].price ? item[0].price : 'N/a'}</span>
                    <div className={style.buttons}>
                        <div className={style.innerbut}>
                        <button>CheckOut</button>
                        <button>Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <h1>Related products</h1>
        
    <div className={style.recomended}>
            
            
            {reco.length!==0?reco.map((i,k)=><Recoitem key={k} items={i}></Recoitem>):<span>'no items'</span>}
            
           </div>
        </div>
    )
}