function adding(){
    return 2+3
}
console.log(adding())

//*******************************
 var largeN =function(x,y,z){
     
     return Math.max(x,y,z);
 }
 console.log(largeN(4,6,7))

//***************************** 

function evenOdd(x){
    if(x%2===0){
        return "even"
    }else if(x%2===1){
        return "odd"
    }
}
console.log(evenOdd(9))

//******************************


function str(){
    var concStr=""
    for(var i=0; i<concStr.length; i++){
        concStr.push(i)
       if(concStr.length<=20){
           return concStr.conc(concStr)
       }else if(concStr.length>20){
           return concStr.slice(0,conStr.length/2)
       }
    }
}
console.log(str())

//************************************


