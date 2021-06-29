import App from './App.js'

describe("back to front", () => {
   it("se prueba la funcion que pone la carta boca arriba", () => {
    document.body.innerHTML  = `<div id="cardBase" class='cardDesing'>
      <p class="imagesContainer">
         <img class="frontCard"
            src="https://fontmeme.com/permalink/210611/f66485b14d6579c58a847f4a39a45026.png">
         <img class="backCard" src="/assets/pngwing.com.png">
      </p>
   </div>`;

      let app = new App();
     
      let cardReturn = app.backToFront(document.getElementById("cardBase"));
  
      expect(cardReturn.children[0].children[0].className).toBe("backCard");
      expect(cardReturn.children[0].children[1].className).toBe("frontCard");
      
    });
  });
  describe("front to back", () => {
    it("se prueba la funcion que pone la carta boca abajo", () => {
     document.body.innerHTML  = `<div id="cardBase" class='cardDesing'>
       <p class="imagesContainer">
          <img class="backCard"
             src="https://fontmeme.com/permalink/210611/f66485b14d6579c58a847f4a39a45026.png">
          <img class="frontCard" src="/assets/pngwing.com.png">
       </p>
    </div>`;
 
       let app = new App();
      
       let cardReturn = app.frontToBack(document.getElementById("cardBase"));
   
       expect(cardReturn.children[0].children[0].className).toBe("frontCard");
       expect(cardReturn.children[0].children[1].className).toBe("backCard");
       
     });
   });
  


     describe("front to back", () => {
       it("se prueba la funcion que pone la carta boca abajo", () => {
        document.body.innerHTML  = `<div id="cardBase" class='cardDesing'>
          <p class="imagesContainer">
             <img class="backCard"
                src="https://fontmeme.com/permalink/210611/f66485b14d6579c58a847f4a39a45026.png">
             <img class="frontCard" src="/assets/pngwing.com.png">
          </p>
       </div>`;
    
          let app = new App();
         
          let cardReturn = app.frontToBack(document.getElementById("cardBase"));
      
          expect(cardReturn.children[0].children[0].className).toBe("frontCard");
          expect(cardReturn.children[0].children[1].className).toBe("backCard");
          
        });
      });


