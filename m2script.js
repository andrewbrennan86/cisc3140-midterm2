

function myKeyPress(e){

  var mytextbox = document.getElementById("textinput");

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(mytextbox.value);

  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);

  mytextbox.value = y;

  // TODO: Add a condition to ignore entries beyond 10 digits

}

function formatPhoneNumber(value){

  if(value.length > 2 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(4);
  else if(value.length > 6 && value.length <=8)
    value = value.slice(0,3) + "-" + value.slice(4,7) + "-" + value.slice(7);

  return value;
}
