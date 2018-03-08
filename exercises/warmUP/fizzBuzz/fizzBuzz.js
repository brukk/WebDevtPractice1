
function fizzBuzz(){
    var fizzArr=[];
    for(var i=1; i<=100;i++){
        if((i%3===0) && (i%5===0)){
            fizzArr.push("fizzbuzz")
        }else if(i%5===0){
            fizzArr.push("buzz")
        }else if(i%3===0){
            fizzArr.push("fizz")
        }else{
            fizzArr.push(i)
        }
    }return fizzArr
}
console.log(fizzBuzz())