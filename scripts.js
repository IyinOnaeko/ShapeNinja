var start = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  var width = Math.random() * 200 + 100;
  if (Math.random() > 0.5) {
    document.getElementById("squares").style.borderRadius = "50%";
  } else {
    document.getElementById("squares").style.borderRadius = "0";
  }

  document.getElementById("squares").style.backgroundColor = getRandomColor();

  document.getElementById("squares").style.width = width + "px";
  document.getElementById("squares").style.height = width + "px";
  document.getElementById("squares").style.top = top + "px";
  document.getElementById("squares").style.left = left + "px";
  document.getElementById("squares").style.display = "block";

  start = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

var quickestTime = "";
var firstRun = false;

document.getElementById("squares").onclick = function () {
  document.getElementById("squares").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;

  if (firstRun == false) {
    firstRun = true;
    quickestTime = timeTaken;
  }
 
 
  if (timeTaken < quickestTime && !firstRun) {
    quickestTime = timeTaken;
  }

  document.getElementById("quickestTime").innerHTML = quickestTime + "s";

  document.getElementById("time").innerHTML = timeTaken + "s";
  appearAfterDelay();
};
