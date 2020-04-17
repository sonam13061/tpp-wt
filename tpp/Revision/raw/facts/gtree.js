let root={
    data:"d10",
    children:
    [
        {
            data:"d20",
            children:
            [
                {
                    data:"d50",
                    children:
                    [
                        
                    ]
                },
                {
                    data:"d60",
                    children:
                    [
                        
                    ]
                }
            ]
        },
        {
            data:"d30",
            children:
            [
                {
                    data:"d70",
                    children:
                    [
                       
                    ]
                },
                {
                    data:"d80",
                    children:
                    [
                        
                    ]
                }
            ]
        },
        {
            data:40,
            children:
            [
                
            ]
        }
    ]
}
function viewgtree(node){
    let meandmyfamily=node.data+"=>";
    for(let i=0;i<node.children.length;i++){
        meandmyfamily=meandmyfamily+node.children[i].data+",";
    }
    console.log(meandmyfamily);
    for(let i=0;i<node.children.length;i++){
        viewgtree(node.children[i]);
    }

}
viewgtree(root);