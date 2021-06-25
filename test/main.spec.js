describe("buttonStart", () => {
  it("Cuando se clickee el boton Start se bloquee pantalla 1, muestre pantalla 2 y bloquee pantalla 3 tambien", () => {
    document.body.innerHTML = ` <div id="screenOne" style="display: block;"><!--Aqui comienza panttalla uno -->
        <div id="containerStepOne" class="container">
           <div class="boxImg">
              <img class="img" src="/assets/pokemon.png" />
              <div class="wordMemory">
                 <img class="imgMemory" src="https://fontmeme.com/permalink/210605/213031742f47ec44e796318d92459499.png"
                    alt="fuente-pokemon" />
              </div>
           </div>
           <div class="boxPokemon">
              <img class="imgOne" src="/assets/pi.png" />
           </div>
           <div class="boxPokemon1">
              <img class="imgTwo" src="/assets/clipart967980.png" />
           </div>
  
           <div class="boxButton">
              <img class="imgTwo" src="/assets/clipart967980.png" />
              <button id="buttonStart" class="buttonStyle"><img class="imgBoton" src="/assets/botonpoke.png">
                 <p> <img class="pointer" src="/assets/click.png"></p>
              </button>
           </div>
  
        </div>
     </div> <!-- Aqui termina panttalla uno -->
  
     <div id="screenTwo" style="display: none;"> <!-- Aqui empieza panttalla dos -->
  
        <div id="containerStepTwo" class="containerFlextwo">
          <div class="timer">timer
           </div>
  
  
           <div id="cards" class="boxCards">
              <div id="cardBase" class="cardDesing">
                 <p class="imagesContainer">
                    <img class="frontCard"
                       src="https://fontmeme.com/permalink/210611/f66485b14d6579c58a847f4a39a45026.png">
                    <img class="backCard" src="/assets/pngwing.com.png">
                 </p>
              </div>
           </div>
           <div class="boxHowtoPlay">
              <p class="boxWordhowToplay">
  
                 <img src="https://fontmeme.com/permalink/210612/3196bc2870d25d7f1d446fc2904f3c3a.png"
                    class="boxWordhowToplayOne">
                 <b>
  
                    <img class="pokemonIn" src="/assets/008.png"><img class="plus" src="/assets/+2.png"><img class="pokemonIn"
                       src="/assets/008.png"><img class="iqual" src="/assets/=2 - copia.png"><img src="/assets/pulgares-hacia-arriba.png"
                       class="ticket">
  
                    <img class="pokemonIn" src="/assets/CHARMANDER.png">
                    <img class="plus" src="/assets/+.png">
                    <img class="pokemonIn" src="/assets/WARTORTLE.png">
                    <img class="iqual" src="/assets/=.png">
                    <img class="thumbsDown" src="/assets/aversion.png">
                 </b>
  
  
              </p>
           </div>
        </div>
     </div> <!-- Aqui termina panttalla dos -->
  
     <div id="screenThree" style="display: none;"> <!-- Aqui empieza panttalla tres -->
  
     <div id="containerThree" class="containerFlexThree">
        <div>
           <div class="boxWin">
           <img class="imgWin" src="assets/Ganaste.png">
        </div>
  
           <div class="boxMeow">
           <img class="meow" src="assets/meow.png">
        </div>
  
           <div class="teamRocket">
           <img class="teamRocketOne" src="assets/equipo rocket.png">
        </div>
  
        <div class="boxR">
           <img class="r" src="assets/r.png">
        </div>
  
           <div class="pikachuBoxtwo">
           <img class="smilingPikachu" src="assets/pikachu feliz.png">
        </div>
  
           <div class="boxButtonTwo">
           <button id="reset" class="button" type="reset"><img class="playAgain" src="assets/volver a jugar.png">
           </button>
        </div>
        </div>
     </div> `;
    require('./../src/main.js')

    const screenOne = document.getElementById("screenOne");
    const screenTwo = document.getElementById("screenTwo");
    const screenThree = document.getElementById("screenThree");

    const buttonStart = document.getElementById("buttonStart");

    buttonStart.click();

    expect(screenOne.style.display).toBe("none");
    expect(screenTwo.style.display).toBe("block");
    expect(screenThree.style.display).toBe("none");
  });
});

describe("reset", () => {
  it("Deberia pasar a screenTwo al momento de presionar el boton de volver a jugar, bloquear pantalla 3 y 1", () => {
    document.body.innerHTML = ` <div id="screenOne" style="display: block;"><!--Aqui comienza panttalla uno -->
          <div id="containerStepOne" class="container">
             <div class="boxImg">
                <img class="img" src="/assets/pokemon.png" />
                <div class="wordMemory">
                   <img class="imgMemory" src="https://fontmeme.com/permalink/210605/213031742f47ec44e796318d92459499.png"
                      alt="fuente-pokemon" />
                </div>
             </div>
             <div class="boxPokemon">
                <img class="imgOne" src="/assets/pi.png" />
             </div>
             <div class="boxPokemon1">
                <img class="imgTwo" src="/assets/clipart967980.png" />
             </div>
    
             <div class="boxButton">
                <img class="imgTwo" src="/assets/clipart967980.png" />
                <button id="buttonStart" class="buttonStyle"><img class="imgBoton" src="/assets/botonpoke.png">
                   <p> <img class="pointer" src="/assets/click.png"></p>
                </button>
             </div>
    
          </div>
       </div> <!-- Aqui termina panttalla uno -->
    
       <div id="screenTwo" style="display: none;"> <!-- Aqui empieza panttalla dos -->
    
          <div id="containerStepTwo" class="containerFlextwo">
            <div class="timer">timer
             </div>
    
    
             <div id="cards" class="boxCards">
                <div id="cardBase" class="cardDesing">
                   <p class="imagesContainer">
                      <img class="frontCard"
                         src="https://fontmeme.com/permalink/210611/f66485b14d6579c58a847f4a39a45026.png">
                      <img class="backCard" src="/assets/pngwing.com.png">
                   </p>
                </div>
             </div>
             <div class="boxHowtoPlay">
                <p class="boxWordhowToplay">
    
                   <img src="https://fontmeme.com/permalink/210612/3196bc2870d25d7f1d446fc2904f3c3a.png"
                      class="boxWordhowToplayOne">
                   <b>
    
                      <img class="pokemonIn" src="/assets/008.png"><img class="plus" src="/assets/+2.png"><img class="pokemonIn"
                         src="/assets/008.png"><img class="iqual" src="/assets/=2 - copia.png"><img src="/assets/pulgares-hacia-arriba.png"
                         class="ticket">
    
                      <img class="pokemonIn" src="/assets/CHARMANDER.png">
                      <img class="plus" src="/assets/+.png">
                      <img class="pokemonIn" src="/assets/WARTORTLE.png">
                      <img class="iqual" src="/assets/=.png">
                      <img class="thumbsDown" src="/assets/aversion.png">
                   </b>
    
    
                </p>
             </div>
          </div>
       </div> <!-- Aqui termina panttalla dos -->
    
       <div id="screenThree" style="display: none;"> <!-- Aqui empieza panttalla tres -->
    
       <div id="containerThree" class="containerFlexThree">
          <div>
             <div class="boxWin">
             <img class="imgWin" src="assets/Ganaste.png">
          </div>
    
             <div class="boxMeow">
             <img class="meow" src="assets/meow.png">
          </div>
    
             <div class="teamRocket">
             <img class="teamRocketOne" src="assets/equipo rocket.png">
          </div>
    
          <div class="boxR">
             <img class="r" src="assets/r.png">
          </div>
    
             <div class="pikachuBoxtwo">
             <img class="smilingPikachu" src="assets/pikachu feliz.png">
          </div>
    
             <div class="boxButtonTwo">
             <button id="reset" class="button" type="reset"><img class="playAgain" src="assets/volver a jugar.png">
             </button>
          </div>
          </div>
       </div> `;
    require("./../src/main.js");

    //const screenOne = document.getElementById("screenOne");
    const screenTwo = document.getElementById("screenTwo");
    const screenThree = document.getElementById("screenThree");

    const reset = document.getElementById("reset");

    reset.click();

    //expect(screenOne.style.display).toBe("none");
    expect(screenTwo.style.display).toBe("block");
    expect(screenThree.style.display).toBe("none");
  });
});