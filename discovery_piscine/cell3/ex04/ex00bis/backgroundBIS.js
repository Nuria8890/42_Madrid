$('#click_me').on('click', function() {
    var r = numberRandom(0, 255);
    var g = numberRandom(0, 255);
    var b = numberRandom(0, 255);
    $("#background").css("background", "rgb(" + r + " ," + g + ", "+ b + ")");
})

function numberRandom(min, max) {
  return Math.random() * (max - min) + min;
}
