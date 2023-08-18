export default function single(a){
  let result=[]
 for(let i=0;i<a.length;i++){
  if(result.includes(a[i])){
    let index=result.indexOf(a[i])
   // console.log(index)
    result[index].orderquantity+=1
  }
  else{
    a[i].orderquantity=1;
    result.push(a[i])
  }
 }
 return result
}