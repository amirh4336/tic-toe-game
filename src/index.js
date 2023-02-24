let place1 = document.getElementById("1");
let place2 = document.getElementById("2");
let place3 = document.getElementById("3");
let place4 = document.getElementById("4");
let place5 = document.getElementById("5");
let place6 = document.getElementById("6");
let place7 = document.getElementById("7");
let place8 = document.getElementById("8");
let place9 = document.getElementById("9");

let cardOne = document.getElementById("player-one")
let cardTwo = document.getElementById("player-two")

let player = 1;

const checkGame = () => {
  
}

function myFunction(place) {

  let circle = place.querySelector('.circle');
  let cross = place.querySelector('.cross');

  if (circle.classList.contains("hidden") && cross.classList.contains("hidden")) {
    if (player === 1) {
      circle.classList.remove("hidden");
      cardOne.classList.remove("border-4")
      cardTwo.classList.add("border-4")
      player = 0 ;
    } else {
      cross.classList.remove("hidden");
      cardTwo.classList.remove("border-4")
      cardOne.classList.add("border-4")
      player = 1
    }
  }
}