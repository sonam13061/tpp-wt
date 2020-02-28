let arr=[2,6,17,28,46,68];
function temp(x){
    if(x%2==0){
        return x+1;  
    }
        else{
            return x-1;
        }
        
}
function mymap(arr,temp){
    var newarr=[];
    
    for(var i=0;i<arr.length;i++){
        newarr[i]= temp(arr[i]);
    }
    return newarr;
        
}
var x=mymap(arr,temp)
console.log(x);
function isprime(num){
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            //console.log("Number is not prime");
            return false;
        }
    }
    return true;
    }  
function myfilter(arr,isprime){
    var c=[];
    k=0;
    for(var i=0;i<arr.length;i++){
        if(isprime(arr[i])){
            c[k++]=arr[i];
        }

    }
    return c;
}
console.log(myfilter(x,isprime));

 