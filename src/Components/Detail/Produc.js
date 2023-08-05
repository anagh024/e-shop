import { useDispatch, useSelector } from 'react-redux'
import { initialState } from '../../Store/Slices/intialState'
import style from './detail.module.css'
import EachItem from '../Shop/Items/eachItem'
import Recoitem from './Recoitem'
import { useNavigate } from 'react-router-dom'
export default function Product({item}){
    const dispatch=useDispatch()
    let reco=initialState
    const nav=useNavigate()
    reco=reco.filter((i)=>(i.category===item[0].category&&i.name!==item[0].name))
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
                    <div>
                    <p className={style.desc}><span className={style.big}>Description:-</span>{item[0].description ? item[0].description : 'N/a'}</p>
                    <span className={style.price}>&#8377;  {item[0].price ? item[0].price : 'N/a'}</span>
                    </div>
                    <div className={style.buttons}>
                        <div className={style.innerbut}>
                        <button  onClick={()=>{
                             nav('/cart')
                          
                        }}>CheckOut</button>
                        <button onClick={()=>{
                            dispatch({type:'cart/add-items',payload:item})
                             
                        }}>Add</button>
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