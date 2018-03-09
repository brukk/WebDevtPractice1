//create an array
//fillthe array with 3 arrays
//each of theinner array with "x"s into the bigger array
//inject the arrays with "x"s into the bigger array
//return bigger array

function chessBoardGen(num){
    var output=[]
    for(var i=0 ; i< num; i++){
        output.push([])
        for(var j=0; j< num; j++){
            output[i].push("x")
        }
    }
    return output;
}
console.log(chessBoardGen(4))