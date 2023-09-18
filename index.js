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


