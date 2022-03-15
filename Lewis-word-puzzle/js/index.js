const buttonElem = document.querySelectorAll('button');
const listSectionElem = document.querySelector('#listSection');
const listElem = document.querySelector('#wordList');
const addButtonElem = document.querySelector('#addButton');
const infoElem = document.querySelector('#info');
const inputNewWordElem = document.querySelector('#newWord');
const infoWinElem = document.querySelector('#infoWin');

const newWord = document.createElement('h2');

let startWord;
let endWord;
let latestValidInput;
let counter = 0;

for (const button of buttonElem) {
    button.addEventListener('click', () => {
        determineGame(button.id);
    });
}

addButtonElem.addEventListener('click', () => {
    infoElem.innerText = ` `;
    console.log(inputNewWordElem.value)
    checkDictionary(inputNewWordElem.value);
    
});

async function checkDictionary(word){
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log(data[0].word);
        // latestValidInput = word;
        splitWords(word);
    }
   catch (error) {
       infoElem.innerText = `Not a valid word`;
       console.log(error);
   }
}


function determineGame(buttonID) {
    if (buttonID == 'fourButton') {
        console.log('spelet du valde är four to five');
        startWord = 'FOUR';
        endWord = 'FIVE';
        latestValidInput = startWord;
        setInputAttribute(startWord);
        createStartAndEndWord();
    } else if (buttonID == 'eyeButton'){
        startWord = 'EYE';
        endWord = 'LID';
        latestValidInput = startWord;
        setInputAttribute(startWord);
        createStartAndEndWord();
    }
    else if (buttonID == 'tigerButton'){
        startWord = 'TIGER';
        endWord = 'ROSES';
        latestValidInput = startWord;
        setInputAttribute(startWord);
        createStartAndEndWord();
    }
    else if (buttonID == 'wheatButton'){
        startWord = 'WHEAT';
        endWord = 'BREAD';
        latestValidInput = startWord;
        setInputAttribute(startWord);
        createStartAndEndWord();
    }
}

function setInputAttribute(startWord) {
    inputNewWordElem.setAttribute('maxlength', startWord.length);
    
}

function createStartAndEndWord() {
    listSectionElem.append(newWord);
    newWord.innerText = `Start word: ${startWord} End word: ${endWord}`;
}

function splitWords (word){
    let splitValidInput = latestValidInput.toUpperCase().split('');
    splitInputWord = word.toUpperCase().split('');
    compareWords(splitValidInput, splitInputWord, word);
}

function createListOfWords(word) {
    latestValidInput = word.toUpperCase();
    const newWord = document.createElement('li');
    listElem.append(newWord);
    newWord.innerText = word;
    counter++;
    determineWin();
}

function compareWords(validInputArr, inputWordArr, word) {
    let changeCounter = 0;
    for (let i = 0; i < validInputArr.length; i++) {
        
        if (validInputArr[i] == inputWordArr[i]) {
            console.log(`${validInputArr[i]} & ${inputWordArr[i]} är samma bokstav`);
        } else {
            console.log(`${validInputArr[i]} & ${inputWordArr[i]} är INTE samma bokstav`);
            changeCounter++;
        }
    }
    determineValidChange(changeCounter, word);
}

function determineValidChange (changeCounter, word) {
    if (changeCounter > 1) {
        console.log('Tyvärr, du ändrade för många')
        infoElem.innerText = `Change only one letter each guess`;
    } else {
        latestValidInput = word.toUpperCase();
        console.log(`latest valid input: ${latestValidInput}`);
        createListOfWords(word);
    }
}

function determineWin () {
    if (latestValidInput == endWord) {
        console.log('du klarade det');  
        infoWinElem.innerText = `YAY! You made it in ${counter} tries`;      
    }
}