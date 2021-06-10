import App from "./components/App.js";

import pokemones from '../data/pokemon/pokemon.js';

//document.getElementById("root").appendChild(App());
document.getElementById("buttonStart").addEventListener("click", buttonStart, false);
//var containerStepOne = document.getElementById("containerStepOne");
//var containerStepTwo = document.getElementById("containerStepTwo");
//containerStepOne.style = "display:none";

//function goToGame() {
  //containerStepOne.style = "display:none";
  //containerStepTwo.style = "display:block";
//}

let cardBase = document.getElementById("cardBase");
let cards = document.getElementById("cards");
cardBase.style = "display:none";



function buttonStart() {
  let click = "";
  console.log("funcionboton")
  document.getElementById("pantalla1").style.display = "none";
  document.getElementById("pantalla2").style.display = "block";
  
  //console.log(pokemones);
  for(let pokemon of pokemones.items){
    var card = cardBase.cloneNode(true);
    card.id = pokemon.id;
    card.children[0].children[0].src = pokemon.image;
    card.style = "display:block";
    cards.appendChild(card);
    //console.log(card.children[0].children[0]);
    //console.log(pokemon);

  }


}