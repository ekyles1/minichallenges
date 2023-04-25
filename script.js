"use strict"
const lightBulb = document.querySelector("#light-bulb");
const onButton = document.querySelector("#on-btn");
const offButton = document.querySelector("#off-btn");
const toggleButton = document.querySelector("#toggle-btn");
const endButton = document.querySelector("#end-btn");

onButton.addEventListener("click", () =>{
  lightBulb.classList.add("on");
  lightBulb.classList.remove("off");
});

offButton.addEventListener("click", ()=> {
  lightBulb.classList.add("off");
  lightBulb.classList.remove("on");
});

toggleButton.addEventListener("click", ()=> {
  lightBulb.classList.toggle("on");
  lightBulb.classList.toggle("off");
});

// const coinContainer = document.getElementById('coin-container');
//       const coinForm = document.getElementById('coin-form');

//       coinForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const count = parseInt(document.getElementById('count-input').value);
//         const coinType = document.getElementById('coin-select').value;

//         for (let i = 0; i < count; i++) {
//           const coin = document.createElement('div');
//           coin.classList.add('coin');
//           coin.classList.add(coinType);
//           coin.textContent = coinType.toUpperCase();

//           coin.addEventListener('click', function() {
//             coinContainer.removeChild(coin);
//           });

//           coinContainer.appendChild(coin);