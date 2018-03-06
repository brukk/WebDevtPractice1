var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

var newVege=vegetables.pop()
console.log(vegetables)

var newFruit=fruit.shift()
console.log(fruit)

var zIndex=fruit.indexOf("orange")
console.log(zIndex)

var newFruits=fruit.push(zIndex)
console.log(fruit)

var zLength=vegetables.length
console.log(zLength)

var newVegetables=vegetables.push(zLength)
console.log(vegetables)

var food=fruit.concat(vegetables)
console.log(food)

var newFood=food.splice(4,2)
console.log(food)

var reversedFood=food.reverse()
console.log(reversedFood)

var newStr=reversedFood.toString()
console.log(newStr)