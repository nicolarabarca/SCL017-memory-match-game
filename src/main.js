import App from "./components/App.js";
import pokemones from "../data/pokemon/pokemon.js";

document.getElementById("buttonStart").addEventListener("click", buttonStart, false);
document.getElementById("cardBase").addEventListener("click", flipCard, false);
document.getElementById("reset").addEventListener("click", reset, false);

let cardBase = document.getElementById("cardBase");
let cards = document.getElementById("cards");
cardBase.style = "display:none";
let flipCards = []; //cartas se den vuelta
let wholeCards = pokemones.items.length;//totalidad de cartas pokemon.js 
let countCard = 0; //contador, para inicializar se pone en 0


//se inicia el juego, pasando de pantalla 1 a la 2
function buttonStart() { 
	let click = "";
	console.log("funcionboton")
	document.getElementById("pantalla1").style.display = "none";
	document.getElementById("pantalla2").style.display = "block";
	document.getElementById("pantalla3").style.display = "none";

	console.log(pokemones);
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
	startTimer();

}

function flipCard(event) {

	console.log(event);

	let idCard = event.target.parentNode.parentNode.id; //evento click, target es la info de la carta
	let card = document.getElementById(idCard); //llama id de carta
	//console.log(card.children[0].children[0].className.indexOf("backCard"));


	backToFront(card);
	if (flipCards.length == 0) { //dara vuelta la carta si la posicion es 0
		flipCards.push(idCard); // guarda la carta en la var cardSave
	} else if (flipCards.length > 0) { //si el largo es mayor a 0 da vuelta la segunda carta
		let idCardSave = flipCards[0]; //carta 1 y 2 se comparan y si coinciden se dejan hacia arriba
		flipCards = []; //es para volver a iniciar un nuevo par de cartas con el arreglo vacio
		setTimeout(function () {
			// console.log(idCardSave);
			//console.log(idCard);
			if (idCardSave.indexOf(idCard) == -1 && idCard.indexOf(idCardSave) == -1) { //se compara id de pokemones
				let cardSave = document.getElementById(idCardSave);

				frontToBack(cardSave);
				frontToBack(card);
				console.log("no son iguales se vuelven a voltear");

			}
			else {
				countCard = countCard + 2;
				console.log(countCard);
				if (countCard == wholeCards) {
					document.getElementById("pantalla1").style.display = "none";
					document.getElementById("pantalla2").style.display = "none";
					document.getElementById("pantalla3").style.display = "block";
					
					  
				
					

				}


			}


		}, 500);

	}


}

function changeFlipCard() {
	if (flipCards.length > 1) {
		console.log("hay 2 cartas boca arriba");
	}
}

function backToFront(card) {

	if (card.children[0].children[0].className.indexOf("frontCard") > -1) {

		card.children[0].children[0].classList = [];
		card.children[0].children[0].classList.add('backCard');

		if (card.children[0].children[1].className.indexOf("backCard") > -1) {
			card.classList.toggle('is-flipped');
			card.children[0].children[1].classList = [];
			card.children[0].children[1].classList.add('frontCard');
		}
		//console.log(card.children[0].children[0].className);
	}
	//card.classList.toggle('is-flipped');
}

function frontToBack(card) {

	if (card.children[0].children[0].className.indexOf("backCard") > -1) {
		card.children[0].children[0].classList = [];
		card.children[0].children[0].classList.add('frontCard');

		if (card.children[0].children[1].className.indexOf("frontCard") > -1) {
			card.classList.toggle('is-flipped');
			card.children[0].children[1].classList = [];
			card.children[0].children[1].classList.add('backCard');
		}
	}
	//card.classList.toggle('is-flipped');
}

function reset() { 
	let click = "";
	console.log("funcionboton")
	//document.getElementById("flipCard").reset();
	document.getElementById("pantalla1").style.display = "none";
	document.getElementById("pantalla2").style.display = "block";
	document.getElementById("pantalla3").style.display = "none";
	}


function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}



const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
	info: {
		color: "green"
	},
	warning: {
		color: "orange",
		threshold: WARNING_THRESHOLD
	},
	alert: {
		color: "red",
		threshold: ALERT_THRESHOLD
	}
};

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

//document.getElementById("root").innerHTML = 
//startTimer();

function onTimesUp() {
	clearInterval(timerInterval);
}

function startTimer() {
	timerInterval = setInterval(() => {
		timePassed = timePassed += 1;
		timeLeft = TIME_LIMIT - timePassed;
		document.getElementById("baseTimerLabel").innerHTML = formatTime(
			timeLeft
		);
		setCircleDasharray();
		setRemainingPathColor(timeLeft);

		if (timeLeft === 0) {
			onTimesUp();
		}
	}, 1000);
}

function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
	const { alert, warning, info } = COLOR_CODES;
	if (timeLeft <= alert.threshold) {
		document
			.getElementById("baseTimerPathRemaining")
			.classList.remove(warning.color);
		document
			.getElementById("baseTimerPathRemaining")
			.classList.add(alert.color);
	} else if (timeLeft <= warning.threshold) {
		document
			.getElementById("baseTimerPathRemaining")
			.classList.remove(info.color);
		document
			.getElementById("baseTimerPathRemaining")
			.classList.add(warning.color);
	}
}

function calculateTimeFraction() {
	const rawTimeFraction = timeLeft / TIME_LIMIT;
	return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
	const circleDasharray = `${(
		calculateTimeFraction() * FULL_DASH_ARRAY
	).toFixed(0)} 283`;
	document
		.getElementById("baseTimerPathRemaining")
		.setAttribute("stroke-dasharray", circleDasharray);
}

/*
const TIME_LIMIT = 30;
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
  info: {
	color: "green",
  },
  warning: {
	color: "orange",
	threshold: WARNING_THRESHOLD,
  },
  alert: {
	color: "red",
	threshold: ALERT_THRESHOLD,
  },
};

document
  .getElementById("buttonStart")
  .addEventListener("click", buttonStart, false);
document.getElementById("cardBase").addEventListener("click", clickCard, false);

let cardBase = document.getElementById("cardBase");
let cards = document.getElementById("cards");
cardBase.style = "display:none";

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

let pokemonSelected = {};

document.getElementById("app").innerHTML = startTimer();

//clickCard (al hacer click en el pokemon) click card recibe el id del pokemon
function clickCard(pokemonId) {
  // TODO: Llamar a otra función para comparar el pokemon actual con el anterior
  console.log(pokemonId);
  compareWithLastCard(pokemonId);
}


function compareWithLastCard(pokemonId) {
  const lastPokemonSelected = pokemonSelected;
  console.log("lastPokemonSelected: ", lastPokemonSelected);
  console.log("pokemonId: ", pokemonId);
  const imgBackSelectorActualPokemon = "#" + pokemonId + " .imagesContainer .backCard";
  const imgFrontSelectorActualPokemon = "#" + pokemonId + " .imagesContainer .frontCard";

  if (
	Object.keys(lastPokemonSelected).length > 0 &&
	lastPokemonSelected.id.replace("One", "") === pokemonId.replace("One", "")
  ) {
	console.log("mismo pokemon!");
	if (lastPokemonSelected.id !== pokemonId) {
	  const imgBackSelectorLastPokemon =
	  "#" + lastPokemonSelected.id + " .imagesContainer .backCard";
	  const imgFrontSelectorLastPokemon =
	  "#" + lastPokemonSelected.id + " .imagesContainer .frontCard";
	  // Ocultar la parte trasera y mostrar los 2 pokemones iguales
	  document.querySelectorAll(imgBackSelectorActualPokemon)[0].style.opacity = "0"; //none
	  document.querySelectorAll(imgFrontSelectorActualPokemon)[0].style.opacity = "1"; //block
	  document.querySelectorAll(imgBackSelectorLastPokemon)[0].style.opacity = "0";
	  if (document.querySelectorAll(imgFrontSelectorLastPokemon)[0]) {
		document.querySelectorAll(imgFrontSelectorLastPokemon)[0].style.opacity = "1";
	  }
	  // No permitir que los pokemones se puedan cliquear, quedan fijos
	  document.getElementById(lastPokemonSelected.id).style.pointerEvents = "none";
	  document.getElementById(pokemonId).style.pointerEvents = "none";
	}
  } else {
	// Cuando los pokemones no son iguales, mostrarmos el pokemon y luego volvemos a ocultarlo
	document.querySelectorAll(imgBackSelectorActualPokemon)[0].style.opacity = "0";
	document.querySelectorAll(imgFrontSelectorActualPokemon)[0].style.opacity = "1";

	setTimeout(() => {
	  document.querySelectorAll(imgFrontSelectorActualPokemon)[0].style.opacity = "0";
	  document.querySelectorAll(imgBackSelectorActualPokemon)[0].style.opacity = "1";
	}, 1.0 * 1000);
	const newPokemon = {
	  id: pokemonId,
	};
	pokemonSelected = newPokemon;
  }
}


function buttonStart() {
  let click = "";
  console.log("funcionboton");
  document.getElementById("pantalla1").style.display = "none";
  document.getElementById("pantalla2").style.display = "block";

  for (let pokemon of pokemones.items) {
	var card = cardBase.cloneNode(true);
	card.id = pokemon.id;
	card.children[0].children[0].src = pokemon.image;
	card.style = "display:block";
	cards.appendChild(card);
	document.getElementById(pokemon.id).addEventListener(
	  "click",
	  function () {
		clickCard(pokemon.id);
	  },
	  false
	);
  }
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
	timePassed = timePassed += 1;
	timeLeft = TIME_LIMIT - timePassed;
	document.getElementById("baseTimerLabel").innerHTML = formatTime(timeLeft);
	setCircleDasharray();
	setRemainingPathColor(timeLeft);

	if (timeLeft === 0) {
	  onTimesUp();
	}
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
	seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
	document
	  .getElementById("baseTimerPathRemaining")
	  .classList.remove(warning.color);
	document
	  .getElementById("baseTimerPathRemaining")
	  .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
	document
	  .getElementById("baseTimerPathRemaining")
	  .classList.remove(info.color);
	document
	  .getElementById("baseTimerPathRemaining")
	  .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
	calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
	.getElementById("baseTimerPathRemaining")
	.setAttribute("stroke-dasharray", circleDasharray);
}

*/