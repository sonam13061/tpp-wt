let fs = require("fs");
let request = require("request");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/19322/scorecard/1187679", function (err, res, html) {
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
    let tablearr=$(" .scorecard-section.bowling table tbody tr");
    let maxwickettake=" ";
    let maxwicket=0;
    for(let i=0;i<tablearr.length;i++){
        let wicket=$($(tablearr[i]).find("td")[5]).html();
        let bowlername=$(tablearr[i]).find("td a").html();
        if(wicket>maxwicket){
            maxwicket=wicket;
            maxwickettake=bowlername;
        }

    }
    console.log(maxwickettake+" "+maxwicket);



    fs.writeFileSync("table.html",maxwickettake+" "+maxwicket);
    console.log("file written successfully");
}