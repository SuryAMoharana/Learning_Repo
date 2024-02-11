function Dog(name, breed, weight){
    this.name=name;
    this.breed=breed;
    this.weight=weight;
    this.bark=function (){
        if(this.weight>10){
            console.log(this.name+" says WOOF!")
        }
        else{
            console.log(this.name+" says YIP!")
        }
    }
}

var sandy=new Dog("Sandy", "Labrodor", 20);
var jimmy=new Dog("Jimmy", "Labrodor", 9);
var simmy=new Dog("Simmy", "German Shpeherd", 30);
var dogs=[sandy,jimmy,simmy];

for(var i=0;i<dogs.length;i++){
    var size="small";
    if(dogs[i].weight>10){
        size="large";
    }
    console.log("Dog : "+dogs[i].name+" is a "+size+" size "+dogs[i].breed);
    dogs[i].bark();
}