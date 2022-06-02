const cartas = document.querySelectorAll('.cartas');

let cartaVirou = false;
let primeiraCarta, segundaCarta;

function flipCard() {
  this.classList.add('flip'); //Virou a carta e travou ela de frente, adicionando uma nova classe;

  if(!cartaVirou){
     //primeira carta escolhida;
      cartaVirou = true;
      primeiraCarta = this;
      return;
  }
     //segunda carta
      cartaVirou = false;
      segundaCarta = this;

      checarMatch();
}
function checarMatch(){
   let eIgual= primeiraCarta.dataset.personagem === segundaCarta.dataset.personagem;

   eIgual ? cartasDesabilitadas() : desvirarCartas();
}

function cartasDesabilitadas(){
   primeiraCarta.removeEventListener('click', flipCard);
   segundaCarta.removeEventListener('click', flipCard);
}

function desvirarCartas(){
   setTimeout(() => {
      primeiraCarta.classList.remove('flip');
      segundaCarta.classList.remove('flip');
   }, 800)
}

cartas.forEach(card => card.addEventListener('click', flipCard)); 

