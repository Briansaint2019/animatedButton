let containers = document.getElementById('container')
containers.style.width = '75%'
containers.style.height = '75%'
containers.style.backgroundImage = "url('./imgs/space.jpg')"

let btnOne = document.getElementById('firstShip')
btnOne.src = './imgs/spaceship1.png'
btnOne.style.width = '100%'
btnOne.style.height = '100%'
btnOne.style.backgroundColor = 'transparent'
btnOne.style.border = 'none'
btnOne.style.outline = 'none'

let btnTwo = document.getElementById('secondShip')
btnTwo.src = './imgs/spaceship2.png'
btnTwo.style.width = '100%'
btnTwo.style.height = '100%'
btnTwo.style.backgroundColor = 'transparent'
btnTwo.style.border = 'none'
btnTwo.style.outline = 'none'

let btnThree = document.getElementById('thirdShip')
btnThree.src = './imgs/spaceship3.png'
btnThree.style.width = '100%'
btnThree.style.height = '100%'
btnThree.style.backgroundColor = 'transparent'
btnThree.style.border = 'none'
btnThree.style.outline = 'none'


function  playSound() {
  let mySound = document.getElementById("firstSound");
  mySound.play();
  let currentPoints = document.getElementById("points");
  currentPoints.innerHTML = parseInt(currentPoints.innerHTML) + 1;



}

function PlaySecondSound(){
let flyerTwo = document.getElementById("secondSound");
flyerTwo.play()
let flyTwoPoints = document.getElementById("pointsTwo")
flyTwoPoints.innerHTML=parseInt(flyTwoPoints.innerHTML)+1;

}

function  playSoundThree() {
  let FlyerThree = document.getElementById("thirdSound");
  FlyerThree.play();
  let flyerThreePoints = document.getElementById("pointsThree");
  flyerThreePoints.innerHTML = parseInt(flyerThreePoints.innerHTML) + 1;



}