let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
console.log("Before");
request("https://www.espncricinfo.com/series/19322/commentary/1187683",function(err,res,html){
    if(err==null && res.statusCode===200){
        parsehtml(html);
        //fs.writeFileSync("index.html",html);
        //console.log("file written");
    }
    else if(res.statusCode===404){
        console.log("Invalid page");
    }
    else{
        console.log(err);
        console.log(res.statusCode);
    }
})
function parsehtml(html){
    let $=cheerio.load(html);
    let itemwrapper=$(".item-wrapper .description");
    let text=$(itemwrapper[0]).text();
    console.log(text);
}