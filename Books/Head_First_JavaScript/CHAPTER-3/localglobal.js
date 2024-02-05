var userPoints=1000;
var skill=1.0;
userPoints=updatePoint(2,100);
function updatePoint(bonus, newPoints){
    points=0;
    var i=0;
    while(i<bonus){
        newPoints=newPoints+skill*bonus;
        i=i+1;
    }
    return newPoints+userPoints;
}

console.log(userPoints);
console.log(points);