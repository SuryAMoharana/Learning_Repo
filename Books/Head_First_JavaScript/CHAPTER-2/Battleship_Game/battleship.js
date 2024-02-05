var randomLoc=Math.floor(Math.random()*5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;

var guess; //undefined
var hits=0;
var guesses=0;

var isSunk=false;

while(isSunk==false){
    
    guess=prompt("Ready, Aim, Fire! (Enter a number 0 to 6):");
    
    if(guess<0 || guess>6){
        alert("Please enter a valid number");
    }
    else{
        guesses=guesses+1;
    }

    if(guess==location1 || guess==location2 || guess==location3){
        hits=hits+1;
        alert("HIT");
        if(hits==3){
            isSunk=true;
            alert("Hey you sank my battle ship")
        }
    }else{
        alert("MISS");
    }

    
}

var stats="you took "+guesses+" guesses to sink the ship, which means your shooting accuracy is "+(3/guesses);
alert(stats);