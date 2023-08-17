export default function single(a){
  let result=[]
 for(let i=0;i<a.length;i++){
  if(result.includes(a[i])){
    a[i].orderquantity=2
  }
  else{
    result.push(a[i])
  }
 }
 return result
}