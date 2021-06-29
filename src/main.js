import pokemones from "./data/pokemon/pokemon.js";
import App from './components/App.js';

document.getElementById("buttonStart").addEventListener("click", buttonStart, false);
document.getElementById("cardBase").addEventListener("click", flipCard, false);
document.getElementById("reset").addEventListener("click", reset, false);

let cardBase = document.getElementById("cardBase");
let cards = document.getElementById("cards");
cardBase.style = "display:none";
let flipCards = []; //cartas se den vuelta
let wholeCards = pokemones.items.length;//totalidad de cartas pokemon.js 
let countCard = 0; //contador, para inicializar se pone en 0
let app = new App();


//se inicia el juego, pasando de pantalla 1 a la 2
function buttonStart() {

	
	document.getElementById("screenOne").style.display = "none";
	document.getElementById("screenTwo").style.display = "block";
	document.getElementById("screenThree").style.display = "none";

	
	for (let pokemon of pokemones.items) { //aca se utiliza solo una carta que sirva para todos los pokemones
		let card = cardBase.cloneNode(true);
		card.id = pokemon.id;
		card.children[0].children[0].src = pokemon.image; // se llama el id de los pokemones para que pasen hacia delante dejando la imagen de pikachu negro por detras
		card.style = "display:block"; //para dejar bloqueada la imagen
		card.addEventListener("click", flipCard, false); //clickear carta y se gire
		cards.appendChild(card); //asigna un hijo nuevo
		//console.log(card.children[0].children[0]);
		//console.log(pokemon);

	}
	

}

function flipCard(event) {

	

	let idCard = event.target.parentNode.parentNode.id; //evento click, target es la info de la carta
	let card = document.getElementById(idCard); //llama id de carta
	//console.log(card.children[0].children[0].className.indexOf("backCard"));

	
	
	if (flipCards.length == 0) { //dara vuelta la carta si la posicion es 0
		app.backToFront(card);
		flipCards.push(idCard); // guarda la carta en la var cardSave
	} else if (flipCards.length > 0) { //si el largo es mayor a 0 da vuelta la segunda carta
		let idCardSave = flipCards[0]; //carta 1 y 2 se comparan y si coinciden se dejan hacia arriba
		if(idCardSave!==idCard){
			app.backToFront(card);
			flipCards = []; //es para volver a iniciar un nuevo par de cartas con el arreglo vacio
			setTimeout(function () {
				// console.log(idCardSave);
				//console.log(idCard);
				if (idCardSave.indexOf(idCard) == -1 && idCard.indexOf(idCardSave) == -1) { //se compara id de pokemones
					let cardSave = document.getElementById(idCardSave);

					app.frontToBack(cardSave);
					app.frontToBack(card);
			

				}
				else {
					countCard = countCard + 2;
					
					if (countCard == wholeCards) {
						document.getElementById("screenOne").style.display = "none";
						document.getElementById("screenTwo").style.display = "none";
						document.getElementById("screenThree").style.display = "block";





					}


				}


			}, 1500);
		}

	}


}


function reset() {
	
	app.removeAllChildNodes(cards);
	for (let pokemon of pokemones.items) {
		let card = cardBase.cloneNode(true);
		card.id = pokemon.id;
		card.children[0].children[0].src = pokemon.image;
		card.style = "display:block";
		card.addEventListener("click", flipCard, false);
		cards.appendChild(card);
		//console.log(card.children[0].children[0]);
		//console.log(pokemon);
	}
	countCard = 0;
	//document.getElementById("flipCard").reset();
	document.getElementById("screenOne").style.display = "none";
	document.getElementById("screenTwo").style.display = "block";
	document.getElementById("screenThree").style.display = "none";
}


//borra los hijos (las cartas). parent es  un parametro que se  podria llamar de  cualquier forma. While 
//( mientras tenga un hijo, remuevelo). parent.removechild lo limpia


const main = {
  buttonStart,
  flipCard,
  //backToFront,
  //frontToBack,
  reset,
};

