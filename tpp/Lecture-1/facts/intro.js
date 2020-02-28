let num=7;
for(let i=2;i*i<=num;i++){
    if(num%i==0){
        console.log("Number is not prime");
        return;
    }
}
console.log("Number is prime");
