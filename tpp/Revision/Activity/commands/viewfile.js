module.exports.view=function(){
    let src=arguments[1];
    let mode=arguments[0];
    if(mode=="-t"){
       viewAstree(src);
    }
    else if(mode=="-f"){
        viewAsFlatFile(src);
    }
    else{
        console.log("Wrong mode");
    }
}
function viewAstree(src){
    console.log("view as tree implemented");
}
function viewAsFlatFile(src){
    console.log("View as flat file implemented");
}
