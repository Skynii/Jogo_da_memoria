const cartas = document.querySelectorAll('.cartas');

let cartaVirou = false;
let primeiraCarta, segundaCarta;

function flipCard() {
  this.classList.add('flip'); //Virou a carta e travou ela de frente, adicionando uma nova classe;

  if(!cartaVirou){
     //primeira carta escolhida;
     cartaVirou = true;
     primeiraCarta = this;
  }else{
     //segunda carta
     cartaVirou = false;
     segundaCarta = this;

     console.log(primeiraCarta.dataset.personagem);
     console.log(segundaCarta.dataset.personagem);
  }
}

cartas.forEach(card => card.addEventListener('click', flipCard)); 

