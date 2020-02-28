let arr=[2,6,17,28,46,68];
function squarer(x){
    return x*x;
}
Array.prototype.mymap=function(cb){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        let ans=cb(this[i]);
        newarr.push(ans);
    }
    return newarr;
}
let sqarr=arr.mymap(squarer);
console.log(sqarr);