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
        <div className={style.visual}>
              <div className={style.smallimages}>

              </div>
              <img src={item[0].src}></img>
           </div>
           <div className={style.textual}>
            <span>{item[0].name?item[0].name:'N/a'}</span>
            <span>{item[0].description?item[0].description:'N/a'}</span>
            <span>{item[0].price?item[0].price:'N/a'}</span>
            <button>CheckOut</button>
            <button>Cart</button>
           </div>
           <div className={style.recomended}>
            
            
            {reco.length!==0?reco.map((i,k)=><Recoitem key={k} items={i}></Recoitem>):<span>'no items'</span>}
            
           </div>
        </div>
    )
}