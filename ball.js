var positionX = 0;
var positionY = 0;
var velocityY = 50;
var velocityX = 50;
var ball = document.getElementById("ball");
var reverseX = false;
var reverseY = false;
var Xmin = 0;
var Ymin = 0;
var Xmax = 800;
var Ymax = 300;
var BallsCount = 5;

var newElement = document.createElement("script");
var scriptTag = document.body.appendChild(newElement);

var newElement2 = document.createElement("style");
var styleTag = document.body.appendChild(newElement2);

scriptTag.id = "scr";
styleTag.id = "stl";

var t = document.getElementById("scr");
var s = document.getElementById("stl");
var d = document.getElementById("div1");

var count = 0;
do {
  // console.log(count);
  var newElement3 = document.createElement("div");
  var divTag = document.body.appendChild(newElement3);
  divTag.id = "div" + count;

  s.innerHTML +=
    "#div" +
    count +
    " {z-index: " +
    count +
    "; position: absolute; left: 0px; left: 0px; top: 200px; width: 50px; height: 50px; border-radius: 50%; background:black;}\
    ";
  ////////////

  t.textContent +=
    "\
    function randomNumber" +
    count +
    "(min, max) {\
      return Math.random() * (max - min) + min;\
    }\
    function chcolor" +
    count +
    "() {\
      var r = randomNumber" +
    count +
    "(0, 255);\
      var g = randomNumber" +
    count +
    "(0, 255);\
      var b = randomNumber" +
    count +
    "(0, 255);\
        div" +
    count +
    ".style.background = 'rgb(' + r + ',' + g + ',' + b + ')';\
      }\
      setInterval(chcolor" +
    count +
    ", 900);\
    \
    ";

  count++;
} while (BallsCount >= count);

/////////

function chsize() {
  var blsz = randomNumber(30, 700);
  ball.style.width = blsz + "px";
  ball.style.height = blsz + "px";
}

function chborder() {
  ball.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall() {
  if (reverseX === false) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + "px";
  } else {
    positionX = positionX - velocityX;
    ball.style.left = positionX + "px";
  }

  if (reverseY === false) {
    positionY = positionY + velocityY;
    ball.style.top = positionY + "px";
  } else {
    positionY = positionY - velocityY;
    ball.style.top = positionY + "px";
  }

  if (positionY > Ymax || positionY === Ymin) {
    reverseY = !reverseY;
  }

  if (positionX > Xmax || positionX === Xmin) {
    reverseX = !reverseX;
  }
}

// setInterval(moveBall, 100);
// setInterval(chborder, 900);
// setInterval(chsize, 1000);
