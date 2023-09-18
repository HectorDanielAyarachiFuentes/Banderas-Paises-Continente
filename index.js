const container = document.querySelector('.container');
let card = '';
let cards = '';
for (let e of array) {
    let name = e.name.common;
    let flag = e.flags.png?? e.flags.svg ;
    let region=e.region;

   card = `<div class="card">
   <div class="cardH">
       <h3> ${name}</h2>
   </div>
   <div class="cardB">
       <img src="${flag}" alt="${name}">
   </div>
   <div class="cardF"> ${region}</div>
</div>`
    cards += card;
}
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

