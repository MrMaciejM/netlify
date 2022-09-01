// ***** Clean board *****
let crossImg = document.getElementsByClassName("cross-img");
for (i = 0; i < crossImg.length; i++) {
  crossImg[i].style.display = "none";
}

let circleImg = document.getElementsByClassName("circle-img");
for (i = 0; i < circleImg.length; i++) {
  circleImg[i].style.display = "none";
}

// ***** ALL VARIABLES *****

let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");
let box5 = document.getElementById("box-5");
let box6 = document.getElementById("box-6");
let box7 = document.getElementById("box-7");
let box8 = document.getElementById("box-8");
let box9 = document.getElementById("box-9");

let cross1 = document.getElementById("cross-img-1");
let cross2 = document.getElementById("cross-img-2");
let cross3 = document.getElementById("cross-img-3");
let cross4 = document.getElementById("cross-img-4");
let cross5 = document.getElementById("cross-img-5");
let cross6 = document.getElementById("cross-img-6");
let cross7 = document.getElementById("cross-img-7");
let cross8 = document.getElementById("cross-img-8");
let cross9 = document.getElementById("cross-img-9");

let circle1 = document.getElementById("circle-img-1");
let circle2 = document.getElementById("circle-img-2");
let circle3 = document.getElementById("circle-img-3");
let circle4 = document.getElementById("circle-img-4");
let circle5 = document.getElementById("circle-img-5");
let circle6 = document.getElementById("circle-img-6");
let circle7 = document.getElementById("circle-img-7");
let circle8 = document.getElementById("circle-img-8");
let circle9 = document.getElementById("circle-img-9");

let counter = 0;
// let counterEven = 2;

let isFieldEmptyBox1 = true;
let isFieldEmptyBox2 = true;
let isFieldEmptyBox3 = true;
let isFieldEmptyBox4 = true;
let isFieldEmptyBox5 = true;
let isFieldEmptyBox6 = true;
let isFieldEmptyBox7 = true;
let isFieldEmptyBox8 = true;
let isFieldEmptyBox9 = true;

let isBoxEmptyBox1 = { value: true };
let isBoxEmptyBox2 = { value: true };
let isBoxEmptyBox3 = { value: true };
let isBoxEmptyBox4 = { value: true };
let isBoxEmptyBox5 = { value: true };
let isBoxEmptyBox6 = { value: true };
let isBoxEmptyBox7 = { value: true };
let isBoxEmptyBox8 = { value: true };
let isBoxEmptyBox9 = { value: true };

let isBoxEmptyArray = [
  isBoxEmptyBox1,
  isBoxEmptyBox2,
  isBoxEmptyBox3,
  isBoxEmptyBox4,
  isBoxEmptyBox5,
  isBoxEmptyBox6,
  isBoxEmptyBox7,
  isBoxEmptyBox8,
  isBoxEmptyBox9,
];

let stopBox1Listener = 0;
let stopBox2Listener = 0;
let stopBox3Listener = 0;
let stopBox4Listener = 0;
let stopBox5Listener = 0;
let stopBox6Listener = 0;
let stopBox7Listener = 0;
let stopBox8Listener = 0;
let stopBox9Listener = 0;

let stopBoxListenerArray = [
  stopBox1Listener,
  stopBox2Listener,
  stopBox3Listener,
  stopBox4Listener,
  stopBox5Listener,
  stopBox6Listener,
  stopBox7Listener,
  stopBox8Listener,
  stopBox9Listener,
];

let player1Move = true;

// Score Counter

let crossScore1 = false;
let crossScore2 = false;
let crossScore3 = false;
let crossScore4 = false;
let crossScore5 = false;
let crossScore6 = false;
let crossScore7 = false;
let crossScore8 = false;
let crossScore9 = false;

let crossScoreArray = [
  crossScore1,
  crossScore2,
  crossScore3,
  crossScore4,
  crossScore5,
  crossScore6,
  crossScore7,
  crossScore8,
  crossScore9,
];

let circleScore1 = false;
let circleScore2 = false;
let circleScore3 = false;
let circleScore4 = false;
let circleScore5 = false;
let circleScore6 = false;
let circleScore7 = false;
let circleScore8 = false;
let circleScore9 = false;

let circleScoreArray = [
  circleScore1,
  circleScore2,
  circleScore3,
  circleScore4,
  circleScore5,
  circleScore6,
  circleScore7,
  circleScore8,
  circleScore9,
];

let allCrosses = document.querySelectorAll(".cross-img");
let allCircles = document.querySelectorAll(".circle-img");

let startBtn = document.getElementById("btnPlay");

function player1Wins() {
  let winnerText = document.getElementById("winnerText");
  const player1Wins = (winnerText.textContent =
    "Player 1 wins! Congratulations!");
}
function player2Wins() {
  let winnerText = document.getElementById("winnerText");
  const player2Wins = (winnerText.textContent =
    "Player 2 wins! Congratulations!");
}
function playersDraw() {
  let winnerText = document.getElementById("winnerText");
  const playersDraw = (winnerText.textContent = "It's a draw!");
}

let isGameStopped = false;

function stopGame() {
  isFieldEmptyBox1 = false;
  isFieldEmptyBox2 = false;
  isFieldEmptyBox3 = false;
  isFieldEmptyBox4 = false;
  isFieldEmptyBox5 = false;
  isFieldEmptyBox6 = false;
  isFieldEmptyBox7 = false;
  isFieldEmptyBox8 = false;
  isFieldEmptyBox9 = false;
  isGameStopped = true;
}

// ***** Start Game *****

function startGame() {
  if (counter == 0) {
    if (
      box1.addEventListener("click", () => {
        if (stopBox1Listener === 0) {
          if (player1Move == true && isFieldEmptyBox1 == true) {
            cross1.style.display = "flex";
            player1Move = false;
            crossScore1 = true;

            // Check scores and/or declare winner
            if (crossScore1 && crossScore2 && crossScore3 == true) {
              player1Wins();
              stopBox1Listener++;
              console.log("stop box listener " + stopBox1Listener);
              stopGame();
            }

            if (crossScore1 && crossScore4 && crossScore7 == true) {
              player1Wins();
              stopBox1Listener++;
              stopGame();
            }

            if (crossScore1 && crossScore5 && crossScore9 == true) {
              player1Wins();
              stopBox1Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox1 == true) {
            circle1.style.display = "flex";
            player1Move = true;
            circleScore1 = true;

            // Check scores and/or declare winner
            if (circleScore1 && circleScore2 && circleScore3 == true) {
              player2Wins();
              stopBox1Listener++;
              stopGame();
            }

            if (circleScore1 && circleScore4 && circleScore7 == true) {
              player2Wins();
              stopBox1Listener++;
              stopGame();
            }

            if (circleScore1 && circleScore5 && circleScore9 == true) {
              player2Wins();
              stopBox1Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox1 = false;
          stopBox1Listener++;
        }
      })
    );

    if (
      box2.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox2Listener === 0) {
          if (player1Move == true && isFieldEmptyBox2 == true) {
            cross2.style.display = "flex";
            player1Move = false;
            crossScore2 = true;

            // Check scores and/or declare winner
            if (crossScore1 && crossScore2 && crossScore3 == true) {
              player1Wins();
              stopBox2Listener++;
              stopGame();
            }
            if (crossScore2 && crossScore5 && crossScore8 == true) {
              player1Wins();
              stopBox2Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox2 == true) {
            circle2.style.display = "flex";
            player1Move = true;
            circleScore2 = true;

            // Check scores and/or declare winner
            if (circleScore1 && circleScore2 && circleScore3 == true) {
              player2Wins();
              stopBox2Listener++;
              stopGame();
            }
            if (circleScore2 && circleScore5 && circleScore8 == true) {
              player2Wins();
              stopBox2Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox2 = false;
          stopBox2Listener++;
        }
      })
    );

    if (
      box3.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox3Listener === 0) {
          if (player1Move == true && isFieldEmptyBox3 == true) {
            cross3.style.display = "flex";
            player1Move = false;
            crossScore3 = true;

            // Check scores and/or declare winner
            if (crossScore1 && crossScore2 && crossScore3 == true) {
              player1Wins();
              stopBox3Listener++;
              stopGame();
            }
            if (crossScore3 && crossScore5 && crossScore7 == true) {
              player1Wins();
              stopBox3Listener++;
              stopGame();
            }
            if (crossScore3 && crossScore6 && crossScore9 == true) {
              player1Wins();
              stopBox3Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox3 == true) {
            circle3.style.display = "flex";
            player1Move = true;
            circleScore3 = true;

            // Check scores and/or declare winner
            if (circleScore1 && circleScore2 && circleScore3 == true) {
              player2Wins();
              stopBox3Listener++;
              stopGame();
            }
            if (circleScore3 && circleScore5 && circleScore7 == true) {
              player2Wins();
              stopBox3Listener++;
              stopGame();
            }
            if (circleScore3 && circleScore6 && circleScore9 == true) {
              player2Wins();
              stopBox3Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox3 = false;
          stopBox3Listener++;
        }
      })
    );

    if (
      box4.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox4Listener === 0) {
          if (player1Move == true && isFieldEmptyBox4 == true) {
            cross4.style.display = "flex";
            player1Move = false;
            crossScore4 = true;

            // Check scores and/or declare winner
            if (crossScore4 && crossScore5 && crossScore6 == true) {
              player1Wins();
              stopBox4Listener++;
              stopGame();
            }
            if (crossScore4 && crossScore1 && crossScore7 == true) {
              player1Wins();
              stopBox4Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox4 == true) {
            circle4.style.display = "flex";
            player1Move = true;
            circleScore4 = true;

            // Check scores and/or declare winner
            if (circleScore4 && circleScore5 && circleScore6 == true) {
              player2Wins();
              stopBox4Listener++;
              stopGame();
            }
            if (circleScore4 && circleScore1 && circleScore7 == true) {
              player2Wins();
              stopBox4Listener++;
              stopGame();
            }
          }
        }
        isFieldEmptyBox4 = false;
        stopBox4Listener++;
      })
    );

    if (
      box5.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox5Listener === 0) {
          if (player1Move == true && isFieldEmptyBox5 == true) {
            cross5.style.display = "flex";
            player1Move = false;
            crossScore5 = true;

            // Check scores and/or declare winner
            if (crossScore2 && crossScore5 && crossScore8 == true) {
              player1Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (crossScore4 && crossScore5 && crossScore6 == true) {
              player1Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (crossScore1 && crossScore5 && crossScore9 == true) {
              player1Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (crossScore3 && crossScore5 && crossScore7 == true) {
              player1Wins();
              stopBox5Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox5 == true) {
            circle5.style.display = "flex";
            player1Move = true;
            circleScore5 = true;

            if (circleScore2 && circleScore5 && circleScore8 == true) {
              player2Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (circleScore4 && circleScore5 && circleScore6 == true) {
              player2Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (circleScore1 && circleScore5 && circleScore9 == true) {
              player2Wins();
              stopBox5Listener++;
              stopGame();
            }
            if (circleScore3 && circleScore5 && circleScore7 == true) {
              player2Wins();
              stopBox5Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox5 = false;
          stopBox5Listener++;
        }
      })
    );

    if (
      box6.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox6Listener === 0) {
          if (player1Move == true && isFieldEmptyBox6 == true) {
            cross6.style.display = "flex";
            player1Move = false;
            crossScore6 = true;

            // Check scores and/or declare winner
            if (crossScore6 && crossScore5 && crossScore4 == true) {
              player1Wins();
              stopBox6Listener++;
              stopGame();
            }
            if (crossScore3 && crossScore6 && crossScore9 == true) {
              player1Wins();
              stopBox6Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox6 == true) {
            circle6.style.display = "flex";
            player1Move = true;
            circleScore6 = true;

            if (circleScore6 && circleScore5 && circleScore4 == true) {
              player2Wins();
              stopBox6Listener++;
              stopGame();
            }
            if (circleScore6 && circleScore5 && circleScore4 == true) {
              player2Wins();
              stopBox6Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox6 = false;
          stopBox6Listener++;
        }
      })
    );

    if (
      box7.addEventListener("click", () => {
        //console.log("77 " + player1Move);
        if (stopBox7Listener === 0) {
          if (player1Move == true && isFieldEmptyBox7 == true) {
            cross7.style.display = "flex";
            player1Move = false;
            crossScore7 = true;

            // Check scores and/or declare winner
            if (crossScore7 && crossScore4 && crossScore1 == true) {
              player1Wins();
              stopBox7Listener++;
              stopGame();
            }
            if (crossScore7 && crossScore5 && crossScore3 == true) {
              player1Wins();
              stopBox7Listener++;
              stopGame();
            }
            if (crossScore7 && crossScore8 && crossScore9 == true) {
              player1Wins();
              stopBox7Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox7 == true) {
            circle7.style.display = "flex";
            player1Move = true;
            circleScore7 = true;

            if (circleScore7 && circleScore4 && circleScore1 == true) {
              player2Wins();
              stopBox7Listener++;
              stopGame();
            }
            if (circleScore7 && circleScore5 && circleScore3 == true) {
              player2Wins();
              stopBox7Listener++;
              stopGame();
            }
            if (circleScore7 && circleScore8 && circleScore9 == true) {
              player2Wins();
              stopBox7Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox7 = false;
          stopBox7Listener++;
        }
      })
    );

    if (
      box8.addEventListener("click", () => {
        //console.log("88 " + player1Move);
        if (stopBox8Listener === 0) {
          if (player1Move == true && isFieldEmptyBox8 == true) {
            cross8.style.display = "flex";
            player1Move = false;
            crossScore8 = true;

            // Check scores and/or declare winner
            if (crossScore8 && crossScore5 && crossScore2 == true) {
              player1Wins();
              stopBox8Listener++;
              stopGame();
            }
            if (crossScore7 && crossScore8 && crossScore9 == true) {
              player1Wins();
              stopBox8Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox8 == true) {
            circle8.style.display = "flex";
            player1Move = true;
            circleScore8 = true;

            if (circleScore8 && circleScore5 && circleScore2 == true) {
              player2Wins();
              stopBox8Listener++;
              stopGame();
            }
            if (circleScore7 && circleScore8 && circleScore9 == true) {
              player2Wins();
              stopBox8Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox8 = false;
          stopBox8Listener++;
        }
      })
    );

    if (
      box9.addEventListener("click", () => {
        //console.log("99 " + player1Move);
        if (stopBox9Listener === 0) {
          if (player1Move == true && isFieldEmptyBox9 == true) {
            cross9.style.display = "flex";
            player1Move = false;
            crossScore9 = true;

            // Check scores and/or declare winner
            if (crossScore9 && crossScore8 && crossScore7 == true) {
              player1Wins();
              stopBox1Listener++;
              stopGame();
            }
            if (crossScore9 && crossScore5 && crossScore1 == true) {
              player1Wins();
              stopBox1Listener++;
              stopGame();
            }
            if (crossScore9 && crossScore6 && crossScore3 == true) {
              player1Wins();
              stopBox1Listener++;
              stopGame();
            }
          }
          //
          else if (player1Move == false && isFieldEmptyBox9 == true) {
            circle9.style.display = "flex";
            player1Move = true;
            circleScore9 = true;

            if (circleScore9 && circleScore8 && circleScore7 == true) {
              player2Wins();
              stopBox9Listener++;
              stopGame();
            }
            if (circleScore9 && circleScore5 && circleScore1 == true) {
              player2Wins();
              stopBox9Listener++;
              stopGame();
            }
            if (circleScore9 && circleScore6 && circleScore3 == true) {
              player2Wins();
              stopBox9Listener++;
              stopGame();
            }
          }
          isFieldEmptyBox9 = false;
          stopBox9Listener++;
        }
      })
    );
  } // end of original if
}
startGame();

// ***** ANIMATIONS AND AUDIO *****
let audioCross = new Audio("chalk-sound-X.mp3");
let audioCircle = new Audio("chalk-sound-O.mp3");

let audioX = false;

let allBoxes = document.getElementsByClassName("box");
let allCrossesClasses = document.getElementsByClassName("cross-img");
let allCirclesClasses = document.getElementsByClassName("circle-img");

for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", () => {
    allCrossesClasses[i].style.transform = "scale(1.8)";
    allCrossesClasses[i].style.transition = "all 0.7s";
    if (isGameStopped == true) {
      audioCircle = "";
      audioCross = "";
    } else if (player1Move == true) {
      audioCross.play();
    } else if (player1Move == false) {
      audioCircle.play();
    }

    function secondAnim() {
      allCrossesClasses[i].style.transform = "scale(1.1)";
    }
    setTimeout(secondAnim, 40);
  });
}

for (let x = 0; x < allBoxes.length; x++) {
  allBoxes[x].addEventListener("click", () => {
    allCirclesClasses[x].style.transform = "scale(1.8)";
    allCirclesClasses[x].style.transition = "all 0.7s";
    function secondAnim2() {
      allCirclesClasses[x].style.transform = "scale(1.1)";
    }
    setTimeout(secondAnim2, 40);
  });
}
console.log(allBoxes[i] + "Box clicked");

//**************** */

// Reset Game / Play button
startBtn.addEventListener("click", function () {
  location.reload(true);
});
