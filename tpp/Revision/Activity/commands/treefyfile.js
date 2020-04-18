var fs = require('fs');
var json=require('JSON');
var path = require('path');
module.exports.treefy=function(){
    let src=arguments[0];
    let dest=arguments[1];
    let root=require(path.join(src,"metadata.json"));

    treefy(src,dest,root);
}
function treefy(src,dest,node){
    if(node.isFile==true){
        let srcpath=path.join(src,node.newname);
        let destpath=path.join(dest,node.oldName);
        fs.copyFileSync(srcpath,destpath);
    }
    else{
        let dirpath=path.join(dest,node.name);
        fs.mkdirSync(dirpath);
        let children=node.children;
        for(let i=0;i<children.length;i++){
         let child=children[i];
         let pPath=dirpath;
         treefy(src,pPath,child);          
        }
    }
}