window.onload = function() {
  console.log('The page is fully loaded2.');
  // the rest of the script
  console.log(location);
  var buttons = document.getElementsByClassName('button');
  console.log(buttons); 
  var buttonsLength = buttons.length;
  console.log('number of buttons: ' + buttonsLength);
  for (var i = 0; i <= buttonsLength - 1; i++) {
  	var buttonText = buttons[i].innerText;
  	console.log(buttonText);
  }
  };

