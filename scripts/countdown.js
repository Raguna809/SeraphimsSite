// set the countdown date
var countDate = new Date("Jul 31, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "D " + hrs + "H " + mins
  + "M " + secs + "S";

  // let people know when the countdown is done
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EARLY ACCESS IS OPEN";
  }
}, 1000); // 1000 is the interval in ms
