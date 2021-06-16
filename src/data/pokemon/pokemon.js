export default {
  name: 'Pokemon',
  items:getRandomItems()
};
function getRandomItems(){
  return [
    { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
    { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
    
    { id: 'charmander', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#F05032' },
    { id: 'charmeleon', image: 'https://www.serebii.net/pokemongo/pokemon/005.png', bgColor: '#F05032' },
    
    { id: 'squirtle', image: 'https://www.serebii.net/pokemongo/pokemon/007.png', bgColor: '#1572B6' },
    { id: 'wartortle', image: 'https://www.serebii.net/pokemongo/pokemon/008.png', bgColor: '#1572B6' },
    
    { id: 'bulbasaurOne', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
    { id: 'ivysaurOne', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
    
    { id: 'charmanderOne', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#F05032' },
    { id: 'charmeleonOne', image: 'https://www.serebii.net/pokemongo/pokemon/005.png', bgColor: '#F05032' },
    
    { id: 'squirtleOne', image: 'https://www.serebii.net/pokemongo/pokemon/007.png', bgColor: '#1572B6' },
    { id: 'wartortleOne', image: 'https://www.serebii.net/pokemongo/pokemon/008.png', bgColor: '#1572B6' },
  ].sort(() => 0.5 - Math.random())
  
}
