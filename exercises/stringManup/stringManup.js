// var readlineSync=require("readline-sync");

// var myName=readlineSync.question("what is your name?");
// console.log("welcome " + myName + "!");



var rs=require("readline-sync");

var urName=rs.question("whats ur name?")
// console.log("welcome " + urName + "!");

var myAge=rs.question("how old are u?");
if(myAge>50){
    console.log("wow" + urName + "u r too old")
}else{
    console.log("ur not bad" + urName)
}

var rss=require("readline-sync");

var greet=rss.question("good afternoon?")
var myresp

