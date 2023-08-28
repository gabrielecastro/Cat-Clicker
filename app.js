// inicia contador
let contador = 0;

// pega a imagem e contador
const imageCat = document.querySelector('.img-cat');
const counter = document.querySelector('.counter');

// função chamada quando a imgem é clicada
const increaseCounter = () => {
  contador += 1;
  counter.textContent = contador;
}

// Adiciona um ouvinte de evento de clique à imagem
imageCat.addEventListener('click', increaseCounter);