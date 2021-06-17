import App from "./components/App.js";

import pokemones from '../data/pokemon/pokemon.js';

//document.getElementById("root").appendChild(App());
document.getElementById("buttonStart").addEventListener("click", buttonStart, false);
document.getElementById("cardBase").addEventListener("click", clickCard, false);
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

function clickCard(pokemonID){
  console.log(pokemonID)
  if (
    pokemonID.includes("One")
  ){
    pokemonID.repleace("One","")
  }



}

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
    document.getElementById(pokemon.id).addEventListener("click", function(){clickCard(pokemon.id)}, false);

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
  
  document.getElementById("app").innerHTML = 
  startTimer();
  
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
}


  