var fs = require('fs');
var json=require('JSON');
var path = require('path');
let uniqid = require("uniqid");
module.exports.untreefy=function(){
    let src=arguments[0];
    let dest=arguments[1];
    let root={};

    untreefy(src,dest,root);
    let myjson=JSON.stringify(root);
    fs.writeFileSync(path.join(dest,"metadata.json"),myjson);
    console.log(root);
    console.log("copied successfully");
}
function untreefy(src,dest,node){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){

          let uniquename=uniqid();
          node.isFile=true;
          node.name=path.basename(src);
          node.newname=uniquename;
          fs.copyFileSync(src,path.join(dest,uniquename));

    }
    else{
        node.isFile=false;
        node.name=path.basename(src);
        node.children=[];
       let childrens=fs.readdirSync(src);
       for(let i=0;i<childrens.length;i++){
           let cChildobj={};
           let cpath=path.join(src,childrens[i]);
           untreefy(cpath,dest,cChildobj);
           node.children.push(cChildobj);
       }

    }
    
}
