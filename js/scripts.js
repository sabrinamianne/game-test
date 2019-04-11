$(document).ready(function() {
  $("form#playerTeam").submit(function(event) {

// user choice team
var userTeam = $("select#teamChoice").val();
// user click on game

var turnCount = 1;
var xMarks = [];
var oMarks = [];
var winCombi =
[["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"];

var littleCases = document.getElementById("corner1");
  littleCases.addEventListener("click", function(e) {
    e.target.innerhtml = "Click"
});


//
// //Loop to get an event for each cases
// for (var i=0;i< littleCases.length; i++ ) {
//   littleCases[i].addEventListener ("click", addPlayerMark)
// }
// // function to mark the case that was clicked
// function addPlayerMark(event) {
//   if (event.target.innerHTML.length === 0) {
//     if (turnCounter % 2 === 0) {
//         xMarks.push(event.target.id);
//         console.log(xMarks)
//         event.target.innerHTML = "X";
//         event.target.style.background = "black";
//     } else {
//       oMarks.push(event.target.id);
//       console.log(oMarks)
//       event.target.innerHTML = "O";
//       event.target.style.background= "white";
//     }
//   } else {
//     alert("already clicked")
//   }
//
//     turnCount++;
//     checkWinners(xMarks,"X");
//     checkWinners(oMarks, "O")
//     if (turnCount === 10) {
//       alert("DRAW")
//     }
// }
// // function to know who wins
// function checkWinners(marksArray, name){
//   for (i=0; i<winningCombos.length; i++)
//     var numWins = 0;
//
//     for (var p= 0; p< winningCombos[i].length; p++) {
//       if(marksArray.indexOf(winCombi[i][p]) !== -1) {
//         numWins++;
//       }
//       if (numWins === 3) {
//         alert("Game Over: Team" + userTeam + "Wins !");
//       }
//     }
// }

    event.preventDefault();

  });
});
