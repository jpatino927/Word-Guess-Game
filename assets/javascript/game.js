var heroesList = ["hulk", "captain america", "iron man", "spiderman","black panther","falcon","ant man","doctor strange","star munch","rocket raccoon","groot","gamora","drax","mantis","spider ham","thor","black widow","hawkeye"]
var choosenHero = ""

var numberOfEmptyBlanks = 0

var lettersOfChoosingHeroes = []

var correctHeroeLetters = []

var incorrectHeroLetters = []

var winCounter = 0
var lossCounter = 0
var numberGuesses = 9


function startingGame(){
    numberGuesses = 9;

    choosenHero = heroesList[Math.floor(Math.random() * heroesList.length)]
    lettersOfChoosingHeroes = choosenHero.split("");
    numberOfEmptyBlanks = lettersOfChoosingHeroes.length;
    console.log(numberOfEmptyBlanks)
    console.log(lettersOfChoosingHeroes)
    //alert(lettersOfChoosingHeroes)

    correctHeroeLetters = [];
    incorrectHeroLetters = [];


    for(var index = 0; index < numberOfEmptyBlanks; index++){
        console.log("Index" , index, "Letter", lettersOfChoosingHeroes[index] )
        console.log()
        if(lettersOfChoosingHeroes[index] != " "){
            console.log(true)
            correctHeroeLetters.push("__")
        }
        else{
            correctHeroeLetters.push(" ")
            //numberOfEmptyBlanks = numberOfEmptyBlanks - 1;
        }
    }
    console.log(correctHeroeLetters)

    document.getElementById("guessLeft").innerHTML = numberGuesses;

    document.getElementById("wordBlanks").innerHTML = correctHeroeLetters.join("&nbsp")

    document.getElementById("wrongGuesses").innerHTML = incorrectHeroLetters.join("  ")

    
}


startingGame()





document.onkeyup = function(event) {
    console.log(event.key)
    var chosenLetter = event.key;
    var letterInWord = false;
    for(var i = 0; i < numberOfEmptyBlanks; i++){
        if(lettersOfChoosingHeroes[i] == chosenLetter) {
            if(lettersOfChoosingHeroes[i] != " "){
                correctHeroeLetters[i] = chosenLetter;
                letterInWord = true;
            }
        }
    }
    if(letterInWord == false){
        
        incorrectHeroLetters.push(chosenLetter)
        console.log(incorrectHeroLetters)
        numberGuesses = numberGuesses - 1;
    }

    console.log(choosenHero)
    console.log(correctHeroeLetters)
    if(correctHeroeLetters.join("") == choosenHero){
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

    document.getElementById("wordBlanks").innerHTML = correctHeroeLetters.join("&nbsp")

    document.getElementById("wrongGuesses").innerHTML = incorrectHeroLetters.join("  ")


   




}


