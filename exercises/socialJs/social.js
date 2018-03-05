var liverpool={
    crust:"liverBird",
    est: 1892,
    stadium:"anfield",
    trophies:["ucl","uefa","faCup","league"],
    myClub:function(){
            return "my clubs crust is" + this.crust + " and its home is" + this.stadium;
    },
    supporters:[
        {
            name:"biruk",
            age:68,
            favPlayer:[
                {
                    name:"salah",
                    jersey:11,
                    nationality:"egypt",
                    nickName:"mo",
                },
                {
                    name:"mane",
                    jersey:19,
                    nationality:"senegal",
                    skills:[
                        "dribbling","shooting"
                   ]
                }
                
            ]
        },
        {
            name:"daniel",
            age:100,
            favPlayer:[
                {
                    name:"emre",
                    jersey:23,
                    nationality:"german"
                },
                {
                    name:"firmino",
                    jersey:9,
                    nationality:"brazil",
                    nickName:"bobby"
                }
            ]
        }
  
    ]
}

liverpool.supporters={
    name:"sami",
    age:28,
    favPlayer:"andy"
};

liverpool.jersey="red";

function addTrophies(){
    liverpool.trophies.splice("leagueCup","superCup")
}
