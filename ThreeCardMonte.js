//PLAY BUTTON//
const modal = document.getElementById("myModal");
const btn = document.getElementById("play-game");
const close = document.getElementById("okButton");

const playButton = document.querySelector('#play-game')
console.log(playButton)
playButton.addEventListener('click', function () {
    modal.style.display = "block"
});
  
close.addEventListener('click', () => {
    modal.style.display = "none"
});

//Will flip card when you click on card
const card = document.querySelector('.flip-card-inner')
card.addEventListener('click', function flipper() {
    card.classList.toggle('is-flipped')
});

const cards = document.querySelector('.flip-card-inner-2')
cards.addEventListener('click', function flipDiamond(){
    cards.classList.toggle('is-flipped')
})

const card2 = document.querySelector('.flip-card-inner-3')
card2.addEventListener('click', function flipHeart(){
    card2.classList.toggle('is-flipped')
})

//Function that flips card.
function flipCard(){ 
    card.classList.toggle('is-flipped')
}

function flipDiamond(){
    cards.classList.toggle('is-flipped')
}

function flipHeart(){
    card2.classList.toggle('is-flipped')
}

//Function that runs shuffle animation.
const child = document.querySelector('.child')
function slider(){
    child.classList.toggle('child-slide')
}

const child2 = document.querySelector('.child-2')
function slider2(){
    child2.classList.toggle('child-2-slide')
}

const child3 = document.querySelector('.child-3')
function slider3(){
    child3.classList.toggle('child-3-slide')
}

//EVENT BUBBLING
const shuffleButton = document.getElementById("shuffle-cards")
console.log(shuffleButton)

const randomButton = document.getElementById("randomizer")
console.log(randomButton)

shuffleButton.addEventListener('click', flipCard)

shuffleButton.addEventListener('click', flipDiamond)

shuffleButton.addEventListener('click', flipHeart)

randomButton.addEventListener('click', slider)

randomButton.addEventListener('click', slider2)

randomButton.addEventListener('click', slider3)

randomButton.addEventListener('click', shuffleArray)

//SHUFFLE FUNCTION
 
const Spade = document.getElementById('card1')
const Diamonds = document.getElementById('card2')
const Hearts = document.getElementById('card3')

let cardArray = [Spade, Diamonds, Hearts]

function shuffleArray(){
    SpadeSource = Spade.src
    DiamondsSource = Diamonds.src
    HeartsSource = Hearts.src
    Spade.src = DiamondsSource
    Diamonds.src = SpadeSource
    Hearts.src = SpadeSource
    Diamonds.src = HeartsSource};

// let cardArray = cardArray.forEach(element => element = Math.floor(Math.random() * cardArray.length))

// return newCard
 
//This function will not swap card order it will only change the image in place.
// function shuffle(){
//     randomIndex = Math.floor(Math.random() * cardArray.length)
//     selectedCard = cardArray[randomIndex]
//     document.getElementById('card1').src = `./Images${selectedCard}`
// }

// This function won't swap or do anything.

// function shuffleArray(cardArray){
//     for (let i = cardArray.length-1; i > 0; i--){
//          randomIndex = Math.floor(Math.random() * (i + 1))
//          cardArray[i] = cardArray[randomIndex];
//          cardArray[randomIndex] = cardArray[i]
//     }
//     return cardArray
// }

// function shuffleArray(cardArray) {
//     let currentIndex = cardArray.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [cardArray[currentIndex], cardArray[randomIndex]] = [
//         cardArray[randomIndex], cardArray[currentIndex]];
//     }
  
//     return cardArray;
//   }
//  console.log(shuffleArray(cardArray))