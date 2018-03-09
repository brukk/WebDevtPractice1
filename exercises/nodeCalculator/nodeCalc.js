var rs= require("readLine-sync");


//prompts
    //get one number
    var num1=rs.question("pick an integer")
    //get another number
    var num2=rs.question("pick an integer")
    //choose operation
    var operations=["+","-","/","*"]
    var index= rs.keyInSelect(operations, "choose the operation u wish to perform");

//choose function
    //select which artimetic function to perform and calls it using brompted numbers as arguments
//aritmetic function
function add(x,y){
    return x+y
}
