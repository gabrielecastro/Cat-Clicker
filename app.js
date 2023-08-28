// inicia os contadores
const counters = {};

// array com todos os gatos
const allCats = [
  { img: 'assets/cat1.jpg', name: "Garfield"},
  { img: 'assets/cat2.jpg', name: "Tadeu"},
  { img: 'assets/cat3.jpg', name: "José"},
  { img: 'assets/cat4.jpg', name: "Marie"},
  { img: 'assets/cat5.jpg', name: "Joãozinho"},
];

const createHtmlImages = () => {
  const container = document.getElementById('all-cats');

  const htmlImages = allCats.map(cat => {
    return `<p class="name-all-cats" id=${cat.name}>${cat.name} </>`;
  });

  container.innerHTML = htmlImages.join('');

  // Adicione um ouvinte de evento de clique a cada nome de gato
  allCats.forEach(cat => {
    const catElement = document.getElementById(cat.name);
    catElement.addEventListener('click', () => selectCat(cat));
  });
};

const selectCat = (cat) => {
  const selectedCatDiv = document.querySelector('.selected-cat');
  selectedCatDiv.innerHTML = `
    <h2>${cat.name}</h2>
    <img src="${cat.img}" alt="${cat.name}">
    <p class="counter" id="counter-${cat.name}">0</p>
  `;

  const counterElement = document.getElementById(`counter-${cat.name}`);
  counterElement.textContent = counters[cat.name] || 0;

  const catImage = selectedCatDiv.querySelector('img');
  catImage.addEventListener('click', () => increaseCounter(cat));
};

const increaseCounter = (cat) => {
  counters[cat.name] = (counters[cat.name] || 0) + 1;
  const counterElement = document.getElementById(`counter-${cat.name}`);
  counterElement.textContent = counters[cat.name];
}

// Chame a função para criar as imagens quando a página carregar
window.onload = createHtmlImages;
