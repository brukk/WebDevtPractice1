

var num=5; 
if (5>3){
    console.log("is greater than")
}


var cat="cat"
if (cat.length===3){
    console.log("is the length")
}


var cat2="cat"
var dog="dog"
if (cat2===dog){
    console.log("is the same")
}
else{
    console.log("not the same")
}


var person = {  
    name: "Bobby",
    age: 12
}
if(person.age>=18){
    console.log(this.person.name + " is allowed to go to the movie")
}
else{
    console.log(this.person.name + " is not allowed to go to the movie")
}


var person2 = {  
    name: "Bobby",
    age: 12
}
if(person2.name[0]==="B"){
    console.log(this.person2.name + " is allowed to go to the movie")
}


var person2={
    name:"Bobby",
    age: 12
}
if((person2.name[0]==="B")&&(person2.age>=18)) {
    console.log(this.person2.name + " is allowed to go to the movie")
}
else{
    console.log(this.person2.name + " is not allowed to go to the movie")
}


var numb=1
var string="1"
if(numb===string){
    console.log("strict")
}
else if(numb==string){
    console.log("loose")
} 
else{
    console.log("not equal at all")
}

var number3=1<=2
var number4=2

if((number3)+(number4)===4){
    console.log("yes")
} 
else{
    console.log("what the hell is this")
}


var dog="dog"
if(typeof dog === "string"){
    console.log("its string")
} 


var myTrue= true
if (typeof myTrue === "boolean"){
    console.log("its boolean")
}


var und
if (typeof und !== "undefined"){
    console.log("its defined")
}
else if(typeof und === "undifined"){
    console.log("its undefined")
}



var numbe=10
if(parseInt("a") > numbe){
    console.log("greater than")
}
else if(parseInt("a") < numbe){
    console.log("less than")
} 
else if(parseInt("a")===numbe){
    console.log("equal")
}


var myNum= 11
var checkN= myNum%2 
myNum? (checkN===0, console.log("even")):(console.log("odd"))






