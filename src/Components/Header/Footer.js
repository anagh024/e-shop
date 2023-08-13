import src from '../../flag.png'
export default function Footer(){
    return(
        <div className="root-footer">
         <div className='flag'>
            <img src={src}></img>
           <span> <span className='logo'>&#174;</span>Made in India</span>
            </div>  
            <div className='contact'>
                <span>Made by akshat Malik</span>
                <span> +91 7404878385</span>
                </div>  
        </div>
    )
}