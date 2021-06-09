import App from "./components/App.js";

//document.getElementById("root").appendChild(App());
document.getElementById("buttonStart").addEventListener("click", buttonStart, false);
//var containerStepOne = document.getElementById("containerStepOne");
//var containerStepTwo = document.getElementById("containerStepTwo");
//containerStepOne.style = "display:none";

//function goToGame() {
  //containerStepOne.style = "display:none";
  //containerStepTwo.style = "display:block";
//}



function buttonStart() {
  let click = "";
  console.log("funcionboton")
      document.getElementById("pantalla1").style.display = "none";
      document.getElementById("pantalla2").style.display = "block";
  
}