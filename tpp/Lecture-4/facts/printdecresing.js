function printdecreasing(num){
    if(num==0){
        return;
    }
    console.log(num);
    printdecreasing(num-1);
}
printdecreasing(5);