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
}
function untreefy(src,dest,node){
    let isfile=fs.lstatSync(src).isFile();
    if(isfile==true){
        let newfile=uniqid();
        let destpath=path.join(dest,newfile);
        fs.copyFileSync(src,destpath);
        node.isFile=true;
        node.oldName=path.basename(src);
        node.newname=newfile;
    }
    else{
        node.isFile=false;
        node.name=path.basename(src);
        node.children=[];
        let children=fs.readdirSync(src);
        for(let i=0;i<children.length;i++){
            let cpath=path.join(src,children[i]);
            let cobj={};
            untreefy(cpath,dest,cobj);
            node.children.push(cobj);
        }
    }
}
