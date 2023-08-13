export default function checklogic(search,name){
for(let a of search){
    if(a===name){
      return true
    }
    else{
        return false
    }
}
}