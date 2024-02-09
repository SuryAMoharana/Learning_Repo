var model={
    boardSize:7,
    numShips:3,
    shipLength:3,
    shipSunk:0,
    ships:[
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],
    fire:function(guess){
        for(var i=0;i<this.numShips;i++){
            var ship=this.ships[i];           
            var index=ship.locations.indexOf(guess);
            if(index>0){
                ship.hits[index]="hit";
                view.displayHit(guess);
                view.displayMessage("HIT!")
                if(this.isSunk==true){
                    view.displayMessage("You sank my battleship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("you missed!")
        return false;
    },
    isSunk:function(ship){
        for(var i=0;i<this.shipLength;i++){
            if(ship.hits[i] !== "hit"){
                return false;                
            }
        }
        return true;
    }
}

var view={
    displayMessage:function(msg){
        var messageArea=document.getElementById("messageArea");
        console.log(1);
        msg.innerHTML=msg;
    },
    displayHit:function(location){
        var cell=document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss:function(location){
        var cell=document.getElementById(location);
        cell.setAttribute("class","miss");
    }
}

var controller={
    guesses:0,
    processGuess:function(guess){
        
    }

}

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// view.displayMessage("Tap Tap is this thing on");

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");