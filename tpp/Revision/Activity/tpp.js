let {view}=require("./commands/viewfile");
let {treefy}=require("./commands/treefyfile");
let {untreefy}=require("./commands/untreefy");

let {help}=require("./commands/helpfile");
switch(process.argv[2]){
    case 'view':
        view(process.argv[3],process.argv[4]);
        break;
    case 'untreefy':
        untreefy(process.argv[3],process.argv[4]);
        break;
    case 'treefy':
       treefy(process.argv[3],process.argv[4]);
        break;
   
    case 'help':
        help(process.argv[3],process.argv[4]);
        break;
    default:
        console.log("Wrong command");

}