
export function checker(a){
    let st=false;
   for(let i=0;i<a.length;i++){
    
    if(a[i]===false){
        
        continue
    }
    else{
        st=true
        break;
    }
   
}
return st
}