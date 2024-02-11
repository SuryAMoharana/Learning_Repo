function sayIt(translator){
    var phrase=translator("Hello");
    console.log(phrase);
}

function hawaiianTranslator(word){
    if(word==="Hello"){
        return "Aloha";
    }
    if(word==="GoodBye"){
        return "Aloha";
    }    
}

sayIt(hawaiianTranslator);