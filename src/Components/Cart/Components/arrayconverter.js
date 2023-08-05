export default function arryconv(a){

    let newArray=[];
    for(let i=0;i<a.length;i++){
        if(Array.isArray(a[i])){
            for(let j=0;j<a[i].length;j++){
                newArray.push(a[i][j])
            }
        }
        else{
            newArray.push(a[i])
        }
    }
    return newArray
}