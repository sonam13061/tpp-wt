let fs = require("fs");
let request = require("request");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/scores/series/19322/", function (err, res, html) {
    //console.log(res);
if (err == null && res.statusCode == 200) {
        fs.writeFileSync("abc.html", html);
        parseHtml(html);
    }
    else if (res.statusCode == 404) {
        console.log("Page not found");
    }
    else {
        console.log(res.statusCode);
    }
});
function parseHtml(html){
    console.log("parsing html");
    let $= cheerio.load(html);
    let cardhtml=co(".cscore.cscore--final.cricket.cscore--watchNotes");
    for(let i=0;i<cardhtml.length;i++){
        let format=$(cardhtml[i])
    }
    
}