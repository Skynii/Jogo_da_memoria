//? Virar a carta

const carta = document.querySellectorALl('.cartas')

//*Adicionar uma classe em todas as .cartas

function virarCarta(){
   this.classList.toggle('virar');
}

carta.forEach(cartas => cartas.addEventListener('click', virarCarta)); //? adiciona um evento clicar nas cartas.