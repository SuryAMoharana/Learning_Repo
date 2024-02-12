var fido = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};
var fidoString = JSON.stringify(fido);
console.log(fidoString);

var fidoStringa = '{ "name": "Fido", "breed": "Mixed", "weight": 38 }';
var fido = JSON.parse(fidoStringa);
console.log(fidoStringa)