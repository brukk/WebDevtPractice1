var form = document.getElementById("submit");
var zGoo = document.getElementById("goo").innerHTML;
var zBob = document.getElementById("bob");
var zCheap = document.getElementById("cheap");
var total = document.getElementById("total");

var data=0;

zGoo.addEventListener("input", function(setPrice){
    data=setPrice*5;
    alert (data);
}); 
// form.addEventListener("submit", function () {
    
// event.target.value;

// zBob.addEventListener("input", setPrice); 
// zCheap.addEventListener("input", setPrice); 
    
// function multi(){

// }