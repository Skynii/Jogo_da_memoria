const cartas = document.querySelectorAll('.cartas');
const btn = document.querySelectorAll('btn-reiniciar')

let cartaVirou = false;
let bloquearCarta = false;
let primeiraCarta, segundaCarta;



function flipCard() {
   if(bloquearCarta) return;
   if(this === primeiraCarta) return;
   
  this.classList.add('flip'); //Virou a carta e travou ela de frente, adicionando uma nova classe;

  if(!cartaVirou){
 
     //primeira carta escolhida;
      cartaVirou = true;
      primeiraCarta = this;

      return;
  }
     //segunda carta
      segundaCarta = this;

      checarMatch();
}

function checarMatch(){
   let eIgual= primeiraCarta.dataset.personagem === segundaCarta.dataset.personagem;

   eIgual ? cartasDesabilitadas() : desvirarCartas();
}

function cartasDesabilitadas(){
   resetarClique()
   
   primeiraCarta.removeEventListener('click', flipCard);
   segundaCarta.removeEventListener('click', flipCard);

   res
}

function desvirarCartas(){
   bloquearCarta = true;

   setTimeout(() => {
      primeiraCarta.classList.remove('flip');
      segundaCarta.classList.remove('flip');
      resetarClique();
   }, 800)
}

function resetarClique(){
   [cartaVirou, bloquearCarta] = [false, false];
   [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar(){
   cartas.forEach(card => {
      let misturar = Math.floor(Math.random()*18);
      card.style.order = misturar;
   });
})();




cartas.forEach(card => card.addEventListener('click', flipCard)); 

