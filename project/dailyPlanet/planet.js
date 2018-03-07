

var enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function who_Wins(is_there_kryptonite,enemy_name){
if (!is_there_kryptonite){
    return "Superman beats " + enemies[i] + ", of course";
}else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemies[i] +" could possibly win this one.";
}
}


for (var i=0;i<enemies.length;i++){
    var is_there_kryptonite=0
if (i%2=== 0) {
        is_there_kryptonite = true;
} else {
        is_there_kryptonite = false;
}
    console.log(who_Wins(is_there_kryptonite,enemies[i]));
}


function howAttractedIsLoisLaneToMe (){
    return Math.floor((Math.random()*10)+1);
}
console.log(howAttractedIsLoisLaneToMe ()) ;


var clarkKent =true;
var superman =false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
}
var phoneBoothQuickChange =Math.random();
if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");
}
