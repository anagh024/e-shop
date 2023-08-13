export default function single(a){
 for(let i=0;i<a.length;i++){
    a[i].orderquantity=1
    for(let j=i+1;j<a.length;j++){
        
        
      if(JSON.stringify(a[i])===JSON.stringify(a[j])){
        a[i].orderquantity+=1;
        a.splice(j,1)
        
        
      }
    }
 }
 return a
}