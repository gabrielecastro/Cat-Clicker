// inicia contador
let contadorGarfield = 0;
let contadorTobias = 0;

// pega a imagem e contador
const imageGarfield = document.getElementById('garfield');
const imageTobias = document.getElementById('tobias');
const counterGarfield = document.getElementById('counter-garfield');
const counterTobias = document.getElementById('counter-tobias');

// função chamada quando a imgem é clicada
const increaseCounter = (cat) => {
  if (cat === "Garfield") {
    contadorGarfield += 1;
    counterGarfield.textContent = contadorGarfield;
  }
  if (cat === "Tobias") {
    contadorTobias += 1;
    counterTobias.textContent = contadorTobias;
  }
  
}

// Adiciona um ouvinte de evento de clique à imagem
imageGarfield.addEventListener('click', () => increaseCounter('Garfield'));
imageTobias.addEventListener('click', () => increaseCounter('Tobias'));