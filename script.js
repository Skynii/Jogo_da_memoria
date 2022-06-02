/*Duas cartas virando*/

const cards = document.querySelectorAll('cartas');


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
   this.classList.add('flip');

   if(!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
   }

   secondCard = this;
   hasFlippedCard = false; 
}

cards.forEach(card => card.addEventListener('click', flipCard))