

function myKeyPress(e){

  var mytextbox = document.getElementById("textinput");

  // TODO: set the value of the textbox with the formatted value

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


  // TODO: Add a condition to ignore entries beyond 10 digits

}

function formatPhoneNumber(value){

  /* TODO:  Use replace function to ignore extra - character */

  if(value.length > 2 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(4);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

  return value;
}
