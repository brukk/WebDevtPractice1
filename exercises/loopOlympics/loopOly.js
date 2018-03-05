for (var i = 0; i < 10; i++) {
    console.log(i);
}

//********************************** 
for (var i = 9; i >= 0; i--) {
    console.log(i)
}
//**********************************

var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
//************************************  

var numbers = []
for (var i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers)

//******************************** 

for (var i = 0; i <= 100; i += 2) {
    console.log(i)
}

//*************************************
var pushedFruits = [];
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i += 2) {
    pushedFruits.push(fruit[i]);
}
console.log(pushedFruits);

//************************************* 
var pushedName=[];
var totalNames=peopleArray.name.length;
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]
for(var i=0 ; i < totalNames; i++){
    pushedName.push((peopleArray[i].name[i].name))
}
console.log(pushedName)

