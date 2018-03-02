var computer={
    brand:"toshiba",
    mouse:1,
    expensive:true,
    myPc:function(){
        console.log("my computer is"+this.brand+"with"+this.mouse+"mouse");
    }
}

var shoe={
    color:"black",
    confi:false,
    price:40,
    myShoe:function(){
        console.log("my shoe is"+this.color);
    }
}

var biruk={
    hobby:["soccer","reading","code"],
    married:false,
    height: 1.75,
    myLife:function(){
        console.log("my hobbies are"+this.hobby);
    }

}

var door={
    wood:true,
    weight:10,
    width:5,
    theDoor:function(){
        console.log("this door has weights"+ this.weight + 
        "its width is" + this.width);
    }
}

var phone={
    brand:"samsung",
    durable:false,
    features:["android","camera","colorScreen"],
    myPhone: function(){
        console.log("my " + this.brand + "is durable?" + this.durable );
    }
}

var fridge={
    color:"white",
    cools: true,
    compartment:2,
    zfridge: function(){
        console.log("this fridge is" + this.color + "and" + this.compartment +
          "compartments" );
    }
}

var classRoom={
    students:20,
    coders: true,
    motto:"coding is fun",
    thisClass: function(){
        console.log("the class has"+ this.students + "students");
    }
}

var bed={
    make: 2010,
    confi:true,
    brand:"no",
    myBed:function(){
      console.log("my bed was made in" + this.make + 
        "and has" + this.brand + "brand");
   }
}