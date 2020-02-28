var fs = require('fs');
var path = require('path');
let uniqid = require("uniqid");
module.exports.untreefy=function(){
    let src=arguments[0];
    let dest=arguments[1];
    untreefy(src,dest);
    console.log("copied successfully");
}
function untreefy(src,dest){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
          let uniquename=uniqid();
          fs.copyFileSync(src,path.join(dest,uniquename));

    }
    else{
        
       let children=fs.readdirSync(src);
       for(let i=0;i<children.length;i++){
           let cpath=path.join(src,children[i]);
           untreefy(cpath,dest);
       }

    }
    
}
