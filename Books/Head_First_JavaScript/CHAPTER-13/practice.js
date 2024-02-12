function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
function ShowDog(name, breed, weight, handler) {
    Dog.call(this,name,breed,weight);
    this.handler = handler;
}
ShowDog.prototype = new Dog();
var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
console.log("Fido is a ShowDog");
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);