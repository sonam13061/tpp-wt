let arr=[4,14,17,23,48,66];
function add(x){
    if(x%2==0){
       return x=x+1;
    }
    else{
       return x=x-1;
    }
}
// Array.prototype.mymap=function(cb){
//     let newarr=[];
//     for(let i=0;i<this.length;i++){
//         let ans=cb(this[i]);
//         newarr.push(ans);
//     }
//     return newarr;
// }
// let arr1=arr.mymap(add);
let arr1=arr.map(add);
console.log(arr1);
function isprime(number){
    for(let div=2;div*div<=number;div++){
                if(number%div==0){
                    return false;
                }
            }
            return true;
}
let filtered = arr1.filter(isprime);
console.log(filtered);