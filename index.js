const container = document.querySelector('.container');
let card = '';
let cards = '';

for (let e of array) {
    let name = e.name.spa || e.name.common;
    let flag = e.flags.png || e.flags.svg;
    let region = e.region;
    let capital = e.capital || "No disponible";
    let borders = e.borders || [];

    // Formatea el área con la unidad de medida "km²" si está disponible
    let area = e.area ? `${e.area.toLocaleString()} km²` : "No disponible";

    // Formatea la población con puntos como separadores de miles
    let population = e.population ? e.population.toLocaleString() : "No disponible";

    card = `<div class="card">
        <div class="cardH">
            <h3>${name}</h3>
        </div>
        <div class="cardB">
            <img src="${flag}" alt="${name}">
        </div>
        <div class="cardF">Región: ${region}</div>
        <div class="cardF">Capital: ${capital}</div>
        <div class="cardF">Área: ${area}</div>
        <div class="cardF">Población: ${population}</div>
        <div class="cardF">Países Vecinos: ${borders.join(', ')}</div>
    </div>`;

    cards += card;
}

container.innerHTML = cards;


container.innerHTML = cards;



// index.js


const pokedex = document.getElementById('pokedex');

function search_pokemon() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('card');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'list-item';
    }
  }
}

document.getElementById('searchbar').addEventListener('keyup', search_pokemon);
