export default class App {

  constructor() {
  }

  removeAllChildNodes(cardsOne) {
    while (cardsOne.firstChild) {
      cardsOne.removeChild(cardsOne.firstChild);
    }
    return cardsOne;
  }  

  backToFront(card) {

    //console.log(card.children[0]);
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
    return card;
  }
  
  frontToBack(card) {
  
    if (card.children[0].children[0].className.indexOf("backCard") > -1) {
      card.children[0].children[0].classList = [];
      card.children[0].children[0].classList.add('frontCard');
  
      if (card.children[0].children[1].className.indexOf("frontCard") > -1) {
        card.classList.toggle('is-flipped');
        card.children[0].children[1].classList = [];
        card.children[0].children[1].classList.add('backCard');
      }
    }
    return card;
    //card.classList.toggle('is-flipped');
  } 

}
/*
const App = () => {
  const el = document.createElement("div");

  el.className = "App";
  el.textContent = "";

  return el;
};

export default App;
*/
