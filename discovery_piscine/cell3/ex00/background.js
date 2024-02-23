function changeBackgroundColor() {
    const elem = document.getElementById("background");
    var r = numberRandom(0, 255);
    var g = numberRandom(0, 255);
    var b = numberRandom(0, 255);
    elem.style.background = "rgb(" + r + " ," + g + ", "+ b + ")";
}

function numberRandom(min, max) {
  return Math.random() * (max - min) + min;
}
