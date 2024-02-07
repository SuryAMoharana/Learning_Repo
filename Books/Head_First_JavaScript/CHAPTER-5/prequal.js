var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 10000
};

function preQual(taxi1){
    if(taxi1.year<=1960 && taxi1.mileage<=10000){
        return true;
    }
    else{
        return false;
    }
    taxi1.color="red";
    console.log(taxi1);
}
var worthALook=preQual(taxi);
if(worthALook){
    console.log("You gotta check out this "+taxi.make+" "+taxi.model);
}else{
    console.log("You should really pass on the "+taxi.make+" "+taxi.model);
}

for(var prop in taxi){
    console.log(prop+" : "+taxi[prop]);
}
delete taxi.mileage;
console.log(taxi);