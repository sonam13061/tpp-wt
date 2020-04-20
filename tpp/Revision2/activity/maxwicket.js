let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
console.log("Before");
request("https://www.espncricinfo.com/series/19322/scorecard/1187683",function(err,res,html){
    if(err==null && res.statusCode===200){
        parsehtml(html);
        fs.writeFileSync("index.html",html);
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
    let bowlers=$(".scorecard-section.bowling table tbody tr");
    let maxwicket=0;
    let maxwickettaker=" ";
    for(let i=0;i<bowlers.length;i++){
        let bowlername=$($(bowlers[i]).find("td")[0]).text();
        let wicket=$($(bowlers[i]).find("td")[5]).text();
        if(wicket>maxwicket){
          maxwicket=wicket;  
          maxwickettaker=bowlername;
        }

    }
    console.log(maxwickettaker+" "+maxwicket);
    console.log();
}