let fs = require("fs");
let request = require("request");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/19322/commentary/1187679", function (err, res, html) {
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
    let lastcommentary=$(".item-wrapper .description").html();
    console.log(lastcommentary);
    
    fs.writeFileSync("commentary.html",lastcommentary);
    console.log("file written successfully");
}