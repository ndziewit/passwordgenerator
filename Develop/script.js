
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var chars ="";

function changeLower() {
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var check = document.getElementById('lower');
    if(check.checked){
      chars = chars.concat(lower);
    } else if (check.checked != true) {
      chars = chars.replace("abcdefghijklmnopqrstuvwxyz", "");
    }
}

function changeUpper() {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var check = document.getElementById('upper');
    if(check.checked){
        chars = chars.concat(upper);
    } else if (check.checked != true) {
        chars = chars.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    }
}

function changeNumeric() {
    var number = "1234567890"
    var check = document.getElementById('numeric');
    if(check.checked){
        chars = chars.concat(number);
    } else if (check.checked != true) {
        chars = chars.replace("1234567890", "");
    }
}

function changeSymbol() {
    var symbol = "!@#$%^&*()-+<>"
    var check = document.getElementById('symbol');
    if(check.checked){
        chars = chars.concat(symbol);
    } else if (check.checked != true) {
        chars = chars.replace("!@#$%^&*()-+<>", "");
    }
}

function randomPassword(length) {
    var pass = "";
    for (var x = 0; x <= length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
  
  var passLength = document.getElementById('pass-length');
    if (passLength.value < 8) {
      alert("Password should be at least 8 characters!")
    } else if (passLength.value > 128){
      alert("Password should be less than 128 characters!")
    } else 
    var password = document.getElementById('password');

    password.value = randomPassword(passLength.value - 1);
}
