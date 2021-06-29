
### Definición del producto Memory Match Game
_Esta App consiste en un memorama o juego de la memoria (juego de mesa). En este caso es virtual, con una baraja de cartas específicas. El objetivo consiste en encontrar los pares con la misma figura impresa utilizando la memoria.
En una primera instancia se creó un prototipo de baja fidelidad el cual consistió en dibujar la idea del usuario sobre su plataforma con papel y lápiz, posterior a esta primera creación se pide feedback al usuario para poder iterar sobre el diseño propuesto y poder trabajar de manera mas definitiva en el prototipo de alta fidelidad que en este caso se utilizo la herramienta Figma.
El usuario solicitó un juego de memoria con temática de Pokemon para niños en etapa pre-escolar y escolares.
La App debía tener una página de inicio con imágenes, temática de Pokemon y una página final.

- Historia de usuario 1: el usuario solicitó una pantalla de inicio del juego.
-Solución: se crea pantalla de inicio que contiene imágenes, título y botón alusivo a la temática principal del juego, fijamos principal atención en el diseño del botón para que este fuese intuitivo acorde a la edad de los usuarios.

- Historia de usuario 2: el usuario pide que se muestre el juego en otra pantalla.
-Solución: Se creó una segunda pantalla en la cual se divide en dos containers. 
    Primer container: contiene el set de cartas y es donde se desarrolla el juego.
    Segundo container: se muestran las instrucciones ilustrativas, esta parte se realiza con mucha dedicación ya que tuvimos que fijarno con mucho cuidado a quien iba dirigido (grupo etario), hay niños que no saben leer, por lo tanto se decidió hacerlas de forma visual y no con redactar textos explicativos.

- Historia de usuario 3: el usuario quería una tercera pantalla que finalizará el juego.
-Solución: Se creó una tercera pantalla con la palabra GANASTE, ya que al momento de dar todas las cartas vueltas con sus respectivas parejas se finaliza el juego e inicia la pantalla 3, también se diseñó un botón de volver a jugar el cual redirige a la segunda pantalla donde se desarrolla nuevamente el juego. Así mismo como en las demás pantallas se sigue la temática alusiva al juego.

- Historia de usuario 4: El usuario pidió que se pudiese jugar en otro tipo de pantallas táctiles.
-Solución: Se adaptaron las pantallas a medida de tablet ya que son las pantallas mas otorgadas por los padres. Se hizo responsive para iPad en posición portrait y landscape.

### Prototipo de baja fidelidad
_Diseño prototipo de baja fidelidad juego de memoria en conjunto con usuario.
![prototipo](https://github.com/nicolarabarca/SCL017-memory-match-game/blob/master/src/assets/prototipo%20de%20baja%20fidelidad.jpg)


### Prototipo de alta fidelidad
_Diseño prototipo de alta fidelidad juego de memoria en conjunto con usuario luego de iterar en el de baja fidelidad.
![prototipo](https://github.com/Magdasanhueza/SCL017-memory-match-game/blob/master/src/assets/prototipo%20alta%20fidelidad.png)



### Testeo de usabilidad
_Se realizó testeo de usabilidad en grupo etario objetivo donde se detectaron las siguientes problemáticas.
-Los usuarios detectaron que el botón inicial no era tan intuitivo, por lo tanto se tuvo que hacer cambios este botón por otra imagen y darle la profundidad a esta para que se pudiera hundir al momento de dar click y también se agregó una imagen de cursor justo al lado del botón para que indicara y fuera mas intuitivo que es un botón.
-En la segunda pantalla en el item instrucciones algunos usuarios detectaron que no eran lo suficientemente explicitas las imágenes iniciales, las cuales correspondían a un símbolo ticket de color verde para las instrucciones correctas y una X de color roja para las instrucciones erradas, estas se reemplazaron con iconos de pulgar hacia arriba y pulgar hacia abajo respectivamente lo que resultó mas atractivo e intuitivo para el usuario.


### Test unitario
- Se adjunta la siguiente imagen para dar a conocer el fallo de nuestro test unitario, por la manera en que nosotras trabajamos al pasar los test no se reconocían a pesar de que se exportaron las funciones que se querian testear. Investigando llegamos a la conclusión de que existían dos formas de pasar los test, la primera era descargar una librería externa (jsDOM) la cual fue descartada al instante porque no estaba permitido trabajar con librerías externas en este proyecto.
- La otra forma de que pasarán nuestros test era rehacer el HTML en components lo cual era mas o menos volver a rehacer el código nuevamente.
- Viéndonos en esta encrucijada dimos con la solución de recrear el ambiente DOM en el archivo de pruebas (App.js) pero aún asi no pasaron el 100% ya que nuestro código no estaba modularizado y para poder resolver esto refactorizamos el código y creamos una clase constructora para poder llevar las funciones que deseabamos testear al archivo App.spec.js. 
- De esta manera se logró el 75% de coverage.

![test](https://github.com/Magdasanhueza/SCL017-memory-match-game/blob/master/src/assets/Falla_test.jfif)

### Lenguaje utilizado

- HTML
- CSS
- JavaScript

###### Link de Merory match battle game
- Si deseas  ver  nuestro proyecto  puedes  ingresar al siguiente enlace : https://magdasanhueza.github.io/SCL017-memory-match-game
