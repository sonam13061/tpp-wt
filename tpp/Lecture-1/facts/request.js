const{exec}=require("child_process");
var opn=require('opn');
function takerequest(data,success,failure){
    if(data%2==0){
        success();
    }
    else{
        failure();
    }
}
function success(){
    exec("calc");
}
function failure(){
    exec('start chrome http://www.facebook.com');
}
takerequest(9,success,failure);
//takerequest(4,success,failure);