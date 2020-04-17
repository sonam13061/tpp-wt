let arr=[4,14,17,23,48,66];
function add(x){
    if(x%2==0){
       return x=x+1;
    }
    else{
       return x=x-1;
    }
}
//method1
function mymap(arr,cb){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
         newarr[i]=cb(arr[i]);
    }
    return newarr;
}
//let arr1=mymap(arr,add);
//method2
Array.prototype.mymap=function(cb){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        let ans=cb(this[i]);
        newarr.push(ans);
    }
    return newarr;
}

let arr1=arr.mymap(add);
console.log(arr1);
function isprime(number){
    for(let div=2;div*div<=number;div++){
                if(number%div==0){
                    return false;
                }
            }
            return true;
}
//method1
function myfilter(arr,cb){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
//let filtered = myfilter(arr1,isprime);
//method2
Array.prototype.myfilter=function(cb){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i]))
        newarr.push(this[i]);
    }
    return newarr;
}
 
 let filtered=arr1.myfilter(isprime);
 console.log(filtered);