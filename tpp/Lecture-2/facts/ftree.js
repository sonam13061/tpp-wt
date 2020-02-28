let fs=require("fs");
const path = require("path");
function displaytree(src,intend){
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
           displaytree(cpath,intend+"\t");
       }

    }
}

displaytree("C:\\Users\\test\\Desktop\\tpp\\Lecture-2\\src","");
