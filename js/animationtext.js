var string =
  "Nossa motivação é deixar sua vida mais doce."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.querySelector(".quemsomos").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70); /* change 70 for speed */
}
frameLooper();
var teste = 1;
