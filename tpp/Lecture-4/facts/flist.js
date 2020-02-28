let fs=require("fs");
const path = require("path");
function displaylist(src){
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
           displaylist(cpath);
       }

    }
}

displaylist("C:\\Users\\test\\Desktop\\tpp\\Lecture-2\\src");