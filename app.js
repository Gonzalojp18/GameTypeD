let enterWord = document.getElementById('text');
let randomWord = '';
let time = 10;
let score= 0;
let timeSpan = document.getElementById('timeSpan');


// HERE GET AN RANDOM WORD OF MY ARRAY
function randomWords() {
    const words = [
        'californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter','snow','dylan','zephyr','funky','chili'];
    let randomWord = [];
    let getWord = words[Math.floor(Math.random() * words.length - 1)];
    randomWord.push(getWord);
    console.log(getWord)
    return getWord;
}

const getWords = randomWords();


// SHOW THE WORD IN BROWSER
// right

function addToDOM(){
    let words = document.getElementById('randomWord').textContent = getWords;
    return words;
}
addToDOM()

// input event to get the value to enter by user

let input = document.getElementById('text');
input.addEventListener('input', (e) => {
    let inputWord = e.target.value;
    if(inputWord === getWords) {
        document.getElementById("text").value = "";

    }
});

// WITH THIS FUNCTIOM CHANGE THE TIME
// let realTime = setInterval(updateTime, 1000);
// function updateTime(){
//     if(time > 0)
//     time--;
//     timeSpan.innerHTML = time;
//     if(time === 0){
//         let tryAgain = document.createElement("div");
//         tryAgain.classList.add("gameOver");
//         input.appendChild(tryAgain)
//     }
// }
// updateTime();


