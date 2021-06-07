import App from './components/App.js';

document.getElementById('root').appendChild(App());

document.getElementById('buttonStart').addEventListener("click", goToGame, false);
var containerStepOne = document.getElementById('containerStepOne');
var containerStepTwo = document.getElementById('containerStepTwo');
containerStepTwo.style="display:none";

function goToGame(){

    containerStepOne.style="display:none";
    containerStepTwo.style="display:block";
}