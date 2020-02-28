let fs=require("fs");
let path = require("path");
module.exports.view=function(){
    let src=arguments[0];
    let mode=arguments[1];
    if(mode=="-t"){
        viewAstree(src,"");
    }
    else if(mode=="-f"){
        viewAsFlatFiles(src);
    }
    else{
        console.log("wrong parameters");
    }
};
function viewAstree(src,intend){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(intend+path.basename(src)+"*");

    }
    else{
        //console.log("I am a directory");
       console.log(intend+path.basename(src));
       let children=fs.readdirSync(src);
       for(let i=0;i<children.length;i++){
           let cpath=path.join(src,children[i]);
           viewAstree(cpath,intend+"\t");
       }

    }
    
}
function viewAsFlatFiles(src){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(src+"*");

    }
    else{
        //console.log("I am a directory");
       console.log(src);
       let children=fs.readdirSync(src);
       for(let i=0;i<children.length;i++){
           let cpath=path.join(src,children[i]);
           viewAsFlatFiles(cpath);
       }

    }
}