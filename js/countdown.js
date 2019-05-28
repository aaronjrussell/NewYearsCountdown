function startCountdown(output) {
  // calculate New Years time
  var nextYear = getNextYear();
  var targetTime = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();

  setInterval(function() {
    // calculate remaining time
    var now = new Date().getTime();
    var deltaTime = targetTime - now;

    // update element with output
    document.getElementById(output).innerHTML = getOutput(deltaTime);
  }, 0, 1000);
}

function getOutput(deltaTime) {
  var days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);

  return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

function getNextYear() {
  return new Date().getFullYear() + 1;
}
