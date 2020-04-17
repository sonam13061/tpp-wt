let fs=require('fs');
let path=require('path');
let uniqid=require('uniqid');
function viewasflat(src){
    let ans=fs.lstatSync(src).isDirectory();
    if(ans=false){
        console.log(src+"*");
    }
    else{
        console.log(src);
        let children=fs.readFileSync(src);
        for(let i=0;i<children.length;i++){
            let cpath=path.join(src,children[i]);
            viewasflat(cpath);
        }
    }
}
function viewastree(src,intend){
    let ans=fs.readFileSync(src).isDirectory();
    if(ans==false){
        console.log(intend+path.basename(src)+"*");
    }
    else{
        console.log(intend+path.basename(src));
        let children=fs.readFileSync(src);
        for(let i=0;i<children.length;i++){
            let cpath=path.join(src,children[i]);
            viewastree(cpath+intend+"\t");
        }
    }
}
function untreefy(src,dest,node){
    let ans=fs.readFileSync(src).isDirectory();
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
        let childrens=fs.readFileSync(src);
        for(let i=0;i<childrens.length;i++){
            let cChildobj={};
            let cpath=path.join(src,children[i]);
            untreefy(cpath,dest,cChildobj);
            node.children.push(cChildobj);

        }
        

    }
}
function treefy(src,dest,root){
    if(root.isFile==true){
        let oldfile=path.join(src,root.newname);
        let newfile=path.join(dest,root.name);
        fs.copyFileSync(oldfile,newfile);
    }
    else{
        let dirname=path.join(dest,root.name);
        fs.mkdirSync(dirname);
        for(let i=0;i<root.children.length;i++){
            treefy(src,dirname,node.children[i]);
        }
    }
}