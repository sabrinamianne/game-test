

let win1 = [1,9,5];
let win2 = [4,9,2];

let userarray = [2,9,5];

let gameU = true;
let array = [3,9,5];
score = 0;


function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);


for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);

}

return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays(userarray, win1, win2))


// function game (wingame, usergame) {
//  while (gameU === true ) {
//    for (let elt of usergame) {
//      if (wingame.includes(elt)) {
//        score++
//   	array.push(score)
//     gameU = false
//     return array
//   } else {
//   score = 0
//   gameU = false
//   return array
//   }
//  }
// }
// }


$(document).ready(function() {
  $("form#playerTeam").submit(function(event) {

// user choice team
var userTeam = $("select#teamChoice").val();
// user click on game
var littleCases = document.getElementByClassName("box");
var turnCount = 1;
var xMarks = [];
var oMarks = [];
var winCombi =
[["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"]];

//Loop to get an event for each cases
for (var i=0;i< littleCases.length; i++ ) {
  littleCases[i].addEventListener ("click", addPlayerMark)
}
// function to mark the case that was clicked
function addPlayerMark(event) {
  if (event.target.innerHTML.length === 0) {
    if (turnCounter % 2 === 0) {
        xMarks.push(event.target.id);
        console.log(xMarks)
        event.target.innerHTML = "X";
        event.target.style.background = "black";
    } else {
      oMarks.push(event.target.id);
      console.log(oMarks)
      event.target.innerHTML = "O";
      event.target.style.background= "white";
    }
  } else {
    alert("already clicked")
  }

    turnCount++;
    checkWinners(xMarks,"X");
    checkWinners(oMarks, "O")
    if (turnCount === 10) {
      alert("DRAW")
    }
}
// function to know who wins
function checkWinners(marksArray, name){
  for (i=0; i<winningCombos.length; i++)
    var numWins = 0;

    for (var p= 0; p< winningCombos[i].length; p++) {
      if(marksArray.indexOf(winCombi[i][p]) !== -1) {
        numWins++;
      }
      if (numWins === 3) {
        alert("Game Over: Team" + userTeam + "Wins !");
      }
    }
}

    event.preventDefault();

  });
});
