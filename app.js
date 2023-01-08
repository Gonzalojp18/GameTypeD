let enterWord = document.getElementById('text');
let randomWord = '';
let time = 10;
let score= 0;


// HERE GET AN RANDOM WORD OF MY ARRAY
function randomWords() {
    const words = [
        'californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter','snow','dylan','zephyr','funky','chili'
    ];
    let randomWord = [];
    let getWord = words[Math.floor(Math.random() * words.length - 1)];
    randomWord.push(getWord);
    console.log(randomWord)
    return getWord;
}

const getWords = randomWords();


// SHOW THE WORD IN BROWSER

function addToDOM(){
    let words = document.getElementById('randomWord').textContent = getWords;
    return words;
}
addToDOM()

// HERE GET THE WORD ENTER BY USER

function getValue(){

window.addEventListener("keypress", function() {
    let letter = [];
    var text = document.getElementById("text").value;
    letter.push(text);
    let textEnd = letter.join('');

});

}

getValue()

// HERE TO CAMPARE TWO WORD

// function checkWord(){
//     let inputWord = addToDOM();
//     let finalValue = getValue();
//     if(inputWord === finalValue){
//         console.log('ganaste')
//     }else{
//         alert('try again')
//     }
// }
// checkWord()



// I GOING TO READ AND IMPROVE THIS  FUNCTION




// function checkWord(arryOne, arryTwo){
//     for(let i = 0; i<arryOne.length; i++){
//         if(arryOne[i] === arryTwo[i]){
//             console.log('ganaste')
//         }if(arryOne[i] ===arryTwo[i]){
//             alert('try again')
//         }else{
//             console.log('what do you do?')
//         }
//     }
//     return
// }

// checkWord()