let arr=[2,6,17,28,46,68];
const map1 = arr.map( x=>temp(x)
);
function temp(x){
    if(x%2==0){
        x=x+1;
        
    }
        else{
            x=x-1;
        }
        return x;
}
console.log(map1);
function isprime(num){
for(let i=2;i*i<=num;i++){
    if(num%i==0){
        //console.log("Number is not prime");
        return false;
    }
}
return true;
}
const result=map1.filter(num=> isprime(num));
console.log(result);
