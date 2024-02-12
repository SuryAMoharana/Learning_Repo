// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// Robot.prototype.maker =function(){
//     console.log("This robot is making");
// }
// Robot.prototype.speak =function(){
//     console.log("This robot can speak");
// }
// Robot.prototype.makeCoffee =function(){
//     console.log("This robot can make Coffee");
// }
// Robot.prototype.blinkLights =function(){
//     console.log("This robot can Blink its lights");
// }
// var robby = new Robot("Robby",1956,"Dr. Mobius");
// var rosie =new Robot("Rosie", 1962, "George Jetson");
// robby.onOffSwitch =true;
// robby.makeCoffee =function(){
//     console.log("Robby can make good coffee")
// }
// rosie.cleanHouse =function(){
//     console.log("Rosie can clean house");
// }
// console.log(robby.name + " was made by " + robby.maker +" in " + robby.year + " and is owned by " + robby.owner);
// robby.makeCoffee();
// robby.blinkLights();
// console.log(rosie.name + " was made by " + rosie.maker +" in " + rosie.year + " and is owned by " + rosie.owner);
// rosie.cleanHouse();

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function() {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
    this.errorMessage = "I appear to have a short circuit!";
};
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));