function Car(param){
    this.make=param.make;    
    this.model=param.model;
    this.year=param.year;
    this.color=param.color;
    this.passengers=param.passengers;
    this.covertible=param.convertible;
    this.mileage=param.started;
    this.started=false;
    this.start=function(){
        this.started=true;
    }
    this.stop=function(){
        this.started=false;
    }
    this.drive=function(){
        if(this.started){
            console.log(this.make + " " +this.model + " goes zoom zoom!");
        }else{
            console.log("Start the engine first.");
        }
    }
}
var cadiParams = {make: "GM",
model: "Cadillac",
year: 1955,
color: "tan",
passengers: 5,
convertible: false,
mileage: 12892};
var cadi = new Car(cadiParams);
cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();

if(cadi instanceof Car){
    console.log("Cadi is a Car");
}else{
    console.log("Cadi is undefined");
}
console.log(new Date().getDay());