var xmenList = ["sabertooth", "venom", "carnage", "thanos","rhino","task master","sand man","green goblin","deadpool","scorpion","mandarin"];
var choosenXmen = ""

var numberOfEmptyBlanks = 0;

var lettersOfChoosingXmen = [];

var correctXmenLetters = [];

var incorrectXmenLetters = [];

var winCounter = 0;
var lossCounter = 0;
var numberGuesses = 9;





function startingGame(){
    numberGuesses = 9;

    choosenXmen = xmenList[Math.floor(Math.random() * xmenList.length)]
    lettersOfChoosingXmen = choosenXmen.split("");
    numberOfEmptyBlanks = lettersOfChoosingXmen.length;
    console.log(numberOfEmptyBlanks)
    console.log(lettersOfChoosingXmen)
    //alert(lettersOfChoosingXmen)

    correctXmenLetters = [];
    incorrectXmenLetters = [];

    
    for(var index = 0; index < numberOfEmptyBlanks; index++){
        console.log("Index" , index, "Letter", lettersOfChoosingXmen[index] )
        console.log()
        if(lettersOfChoosingXmen[index] != " "){
            console.log(true)
            correctXmenLetters.push("__")        
        }
        else{
            correctXmenLetters.push(" ")
            //numberOfEmptyBlanks = numberOfEmptyBlanks - 1;
        }
    }
    console.log(correctXmenLetters)

    document.getElementById("guessLeft").innerHTML = numberGuesses;

    document.getElementById("wordBlanks").innerHTML = correctXmenLetters.join("&nbsp")

    document.getElementById("wrongGuesses").innerHTML = incorrectXmenLetters.join("  ")

    
}


startingGame()





document.onkeyup = function(event) {
    console.log(event.key)
    var chosenLetter = event.key;
    var letterInWord = false;
    for(var i = 0; i < numberOfEmptyBlanks; i++){
        if(lettersOfChoosingXmen[i] == chosenLetter) {
            if(lettersOfChoosingXmen[i] != " "){
                correctXmenLetters[i] = chosenLetter;
                letterInWord = true;
            }
        }
    }
    if(letterInWord == false){
        
        incorrectXmenLetters.push(chosenLetter)
        console.log(incorrectXmenLetters)
        numberGuesses = numberGuesses - 1;
    }

    console.log(choosenXmen)
    console.log(correctXmenLetters)
    if(correctXmenLetters.join("") == choosenXmen){
        winCounter += 1;
        alert("You win: " + winCounter + " number of Guesses Left: " + numberGuesses + " loss: " + lossCounter );
        startingGame()
    }
    else if(numberGuesses == 0) {
        lossCounter += 1;
        alert("You win: " + winCounter + " number of Guesses Left: " + numberGuesses + " loss: " + lossCounter );
        startingGame()
    }

    


    document.getElementById("guessLeft").innerHTML = numberGuesses;

    document.getElementById("wordBlanks").innerHTML = correctXmenLetters.join("&nbsp")

    document.getElementById("wrongGuesses").innerHTML = incorrectXmenLetters.join("  ")


   




}
