var fs = require('fs');
//var json=require('JSON');
var path = require('path');
//let uniqid = require("uniqid");
module.exports.treefy=function(){
    let src=arguments[0];
    let dest=arguments[1];
    let root=require(path.join(src,"metadata.json"));

    treefy(src,dest,root);
    
    console.log(root);
    //console.log("copied successfully");
}
function treefy(src,dest,node){
    if(node.isFile==true){
        let oldfile=path.join(src,node.newname);
        let newfile=path.join(dest,node.name);
        fs.copyFileSync(oldfile,newfile);

    }
    else{
        let dirName=path.join(dest,node.name);
        fs.mkdirSync(dirName);
        for(let i=0;i<node.children.length;i++){
            treefy(src,dirName,node.children[i]);
        }
    }
}
