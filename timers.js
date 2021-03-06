var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

resetButton.addEventListener("click", resetButtonChosen);
startButton.addEventListener("click", startButtonChosen);
pauseButton.addEventListener("click", pauseButtonChosen);

var seconds = 0;
var pressStartButton;

function fireStopwatch() {
  seconds++;
  document.getElementById("timer").innerHTML = "Time Elapsed: " + seconds;
}
function resetButtonChosen() {
  window.clearInterval(pressStartButton);
  seconds = 0;
  document.getElementById("timer").innerHTML = "Stop Watch: " + seconds;
  startButton.setAttribute("style","display: inline-block");
}
function startButtonChosen() {
  pressStartButton = window.setInterval(fireStopwatch, 1000);
  startButton.setAttribute("style","display: none");
}
function pauseButtonChosen() {
 window.clearInterval(pressStartButton);
 document.getElementById("timer").innerHTML = "Time Elapsed: " + seconds;
 startButton.setAttribute("style","display: inline-block");
}
