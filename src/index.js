// places
let place1 = document.getElementById("1");
let place2 = document.getElementById("2");
let place3 = document.getElementById("3");
let place4 = document.getElementById("4");
let place5 = document.getElementById("5");
let place6 = document.getElementById("6");
let place7 = document.getElementById("7");
let place8 = document.getElementById("8");
let place9 = document.getElementById("9");
// circles
let circleOne = document.getElementById("circle1")
let circleTwo = document.getElementById("circle2")
let circleThree = document.getElementById("circle3")
let circleFour = document.getElementById("circle4")
let circleFive = document.getElementById("circle5")
let circleSix = document.getElementById("circle6")
let circleSeven = document.getElementById("circle7")
let circleEight = document.getElementById("circle8")
let circleNine = document.getElementById("circle9")

// // crosss
let crossOne = document.getElementById("cross1")
let crossTwo = document.getElementById("cross2")
let crossThree = document.getElementById("cross3")
let crossFour = document.getElementById("cross4")
let crossFive = document.getElementById("cross5")
let crossSix = document.getElementById("cross6")
let crossSeven = document.getElementById("cross7")
let crossEight = document.getElementById("cross8")
let crossNine = document.getElementById("cross9")



let cardOne = document.getElementById("player-one")
let cardTwo = document.getElementById("player-two")

let player = 1;

const checkGame1 = () => {
  let message = document.getElementById("win-message")
  if (!circleOne.classList.contains("hidden") && !circleTwo.classList.contains("hidden") && !circleThree.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossOne.classList.contains("hidden") && !crossTwo.classList.contains("hidden") && !crossThree.classList.contains("hidden") ) {
    // player two
    message.classList.remove("hidden")
    message.innerHTML = "player 2 Win";
    player = 3
  } else if (!circleFour.classList.contains("hidden") && !circleFive.classList.contains("hidden") && !circleSix.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossFour.classList.contains("hidden") && !crossFive.classList.contains("hidden") && !crossSix.classList.contains("hidden") ) {
    // player Two
    message.classList.remove("hidden");
    message.innerHTML = "player 2 Win";
    player = 3
  } else if (!circleSeven.classList.contains("hidden") && !circleEight.classList.contains("hidden") && !circleNine.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossSeven.classList.contains("hidden") && !crossEight.classList.contains("hidden") && !crossNine.classList.contains("hidden") ) {
    // player Two
    message.classList.remove("hidden");
    message.innerHTML = "player 2 Win";
    player = 3
  } 
}
const checkGame2 = () => {
  let message = document.getElementById("win-message")
  if (!circleOne.classList.contains("hidden") && !circleFour.classList.contains("hidden") && !circleSeven.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossOne.classList.contains("hidden") && !crossFour.classList.contains("hidden") && !crossSeven.classList.contains("hidden") ) {
    // player two
    message.classList.remove("hidden")
    message.innerHTML = "player 2 Win";
    player = 3
  } else if (!circleTwo.classList.contains("hidden") && !circleFive.classList.contains("hidden") && !circleEight.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossTwo.classList.contains("hidden") && !crossFive.classList.contains("hidden") && !crossEight.classList.contains("hidden") ) {
    // player Two
    message.classList.remove("hidden");
    message.innerHTML = "player 2 Win";
    player = 3
  } else if (!circleThree.classList.contains("hidden") && !circleSix.classList.contains("hidden") && !circleNine.classList.contains("hidden") ) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
    player = 3
  } else if (!crossThree.classList.contains("hidden") && !crossSix.classList.contains("hidden") && !crossNine.classList.contains("hidden") ) {
    // player Two
    message.classList.remove("hidden");
    message.innerHTML = "player 2 Win";
    player = 3
  } 
}

const checkGame3 = () => {
  let message = document.getElementById("win-message")
  if (!circleOne.classList.contains("hidden") && !circleFive.classList.contains("hidden") && !circleNine.classList.contains("hidden")) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
  } else if (!crossOne.classList.contains("hidden") && !crossFive.classList.contains("hidden") && !crossNine.classList.contains("hidden")) {
    // player two
    message.classList.remove("hidden")
    message.innerHTML = "player 2 Win";
  } else if (!circleThree.classList.contains("hidden") && !circleFive.classList.contains("hidden") && !circleSeven.classList.contains("hidden")) {
    // player one
    message.classList.remove("hidden")
    message.innerHTML = "player 1 Win";
  } else if (!crossThree.classList.contains("hidden") && !crossFive.classList.contains("hidden") && !crossSeven.classList.contains("hidden")) {
    // player two
    message.classList.remove("hidden")
    message.innerHTML = "player 2 Win";
  }
}

function myFunction(place) {

  let circle = place.querySelector('.circle');
  let cross = place.querySelector('.cross');

  if (circle.classList.contains("hidden") && cross.classList.contains("hidden")) {
    if (player === 1) {
      circle.classList.remove("hidden");
      cardOne.classList.add("border-[#332167]");
      cardTwo.classList.remove("border-[#332167]");
      player = 0 ;
    } else if (player === 0) {
      cross.classList.remove("hidden");
      cardTwo.classList.add("border-[#332167]");
      cardOne.classList.remove("border-[#332167]");
      player = 1
    }
    checkGame1()
    checkGame2()
    checkGame3()
  }
}