let fs=require("fs");
let path=require("path");
module.exports.view=function(){
    let src=arguments[0];
    let mode=arguments[1];
    if(mode=="-t"){
       viewAstree(src,"");
    }
    else if(mode=="-f"){
        viewAsFlatFile(src,path.basename(src));
    }
    else{
        console.log("Wrong mode");
    }
}
function viewAstree(src,indent){
    let isFile=fs.lstatSync(src).isFile();
   if(isFile==true){
       console.log(indent+path.basename(src)+"*");
   }
   else{
       console.log(indent+path.basename(src));
       let childrens=fs.readdirSync(src);
       for(let i=0;i<childrens.length;i++){
           let child=childrens[i];
           let childpath=path.join(src,child);
           
           viewAstree(childpath,indent+"\t");
       }
   }
}

function viewAsFlatFile(src,toprint){
    let isFile=fs.lstatSync(src).isFile();
    if(isFile==true){
        console.log(toprint+"*");
    }
    else{
        console.log(toprint);
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];
            let childpath=path.join(src,child);
            viewAsFlatFile(childpath,path.join(toprint,child));
        }
    }
 }
 
// function viewAsFlatFile(src){
//    let isFile=fs.lstatSync(src).isFile();
//    if(isFile==true){
//        console.log(src+"*");
//    }
//    else{
//        console.log(src);
//        let childrens=fs.readdirSync(src);
//        for(let i=0;i<childrens.length;i++){
//            let child=childrens[i];
//            let childpath=path.join(src,child);
//            viewAsFlatFile(childpath,path.join(toprint,child));
//        }
//    }
// }
