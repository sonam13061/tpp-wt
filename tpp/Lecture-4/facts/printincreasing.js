function printincreasing(num){
    if(num==0){
        return;
    }
    printincreasing(num-1);
    console.log(num);
   
}
printincreasing(5);