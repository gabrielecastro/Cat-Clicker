// Model
const model = {
  counters: {},
  allCats: [
    { img: 'assets/cat1.jpg', name: "Garfield" },
    { img: 'assets/cat2.jpg', name: "Tadeu" },
    { img: 'assets/cat3.jpg', name: "José" },
    { img: 'assets/cat4.jpg', name: "Marie" },
    { img: 'assets/cat5.jpg', name: "Joãozinho" },
  ],
};

// Octopus (Controller)
const octopus = {
  init: function () {
    view.init();
  },
  getAllCats: function () {
    return model.allCats;
  },
  getCounter: function (catName) {
    return model.counters[catName] || 0;
  },
  increaseCounter: function (catName) {
    model.counters[catName] = (model.counters[catName] || 0) + 1;
    view.renderSelectedCat(catName);
  },
};

// View
const view = {
  init: function () {
    this.container = document.getElementById('all-cats');
    this.selectedCatDiv = document.querySelector('.selected-cat');

    this.createHtmlImages();

    octopus.init();
  },
  createHtmlImages: function () {
    const htmlImages = octopus.getAllCats().map(cat => {
      return `<p class="name-all-cats" id=${cat.name}>${cat.name} </>`;
    });

    this.container.innerHTML = htmlImages.join('');

    octopus.getAllCats().forEach(cat => {
      const catElement = document.getElementById(cat.name);
      catElement.addEventListener('click', () => this.renderSelectedCat(cat.name));
    });
  },
  renderSelectedCat: function (catName) {
    const cat = octopus.getAllCats().find(cat => cat.name === catName);
    this.selectedCatDiv.innerHTML = `
      <h2>${cat.name}</h2>
      <img src="${cat.img}" alt="${cat.name}">
      <p class="counter" id="counter-${cat.name}">${octopus.getCounter(cat.name)}</p>
    `;

    const catImage = this.selectedCatDiv.querySelector('img');
    catImage.addEventListener('click', () => octopus.increaseCounter(cat.name));
  },
};

// Call the function to create the images when the page loads
window.onload = function () {
  octopus.init();
};
