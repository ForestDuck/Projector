'use strict'
// Declare const that represent the button element (button), 
// the message element (lastTurn), the light and dark background 
// colors (lightBg and darkBg), and the text that should appear 
// on the button when it is turned off or on (turnOffText and turnOnText).
const button = document.querySelector('.cybr-btn');
const lastTurn = document.querySelector('.info');
const lightBg = '#fff';
const darkBg = '#000';
const turnOffText = `<button class=" cybr-btn">Turn off<span aria-hidden>_</span>
<span aria-hidden class="cybr-btn__glitch">Turn On</span>
<span aria-hidden class="cybr-btn__tag">A.M</span></button>`;
const turnOnText =  `<button class=" cybr-btn">Turn On<span aria-hidden>_</span>
<span aria-hidden class="cybr-btn__glitch">Turn Off</span>
<span aria-hidden class="cybr-btn__tag">A.M</span></button>`;
// Checks if the last state of the button was "on" by using 
// localStorage.getItem('state') to retrieve the value of the "state" 
// key from the local storage of the browser. If the value is "on", 
// the background color of the page is set to the dark background color, 
// the text on the button is set to "Turn on", and the message below the 
// button is updated with the last time the background color was changed. 
// If the value is anything other than "on", the background color of the 
// page is set to the light background color, the text on the button is set
// to "Turn off", and the message is updated with the last time the 
// background color was changed.
const lastState = localStorage.getItem('state');
if (lastState === 'on') {
  document.body.style.backgroundColor = darkBg;
  button.innerHTML = turnOnText;
  lastTurn.innerText = `Last turn on: ${localStorage.getItem('lastChange')}`;
} else {
  document.body.style.backgroundColor = lightBg;
  button.innerHTML = turnOffText;
  lastTurn.innerText = `Last turn off: ${localStorage.getItem('lastChange')}`;
}
// The toggleState() function is defined, which is called when the button 
// is clicked. This function first retrieves the current state of the button 
// from the local storage of the browser using localStorage.getItem('state'). 
// It then sets the background color of the page and the text color
// of the body based on the current state, and updates the text on 
// the button and the message below it with the current time. 
// Finally, it updates the value of the "state" key in the local 
// storage to reflect the new state of the button, and also updates 
// the "lastChange" key with the current time.
function toggleState() {
  const currentState = localStorage.getItem('state');
  const now = new Date().toLocaleString('en-GB');
  if (currentState === 'on') {
    document.body.style.backgroundColor = lightBg;
    document.body.style.color = darkBg;
    button.innerHTML = turnOffText;
    lastTurn.innerText = `Last turn on: ${now}`;
    localStorage.setItem('state', 'off');
    localStorage.setItem('lastChange', now);
  } else {
    document.body.style.backgroundColor = darkBg;
    document.body.style.color = lightBg;
    button.innerHTML = turnOnText;
    lastTurn.innerText = `Last turn off: ${now}`;
    localStorage.setItem('state', 'on');
    localStorage.setItem('lastChange', now);
  }
}

// The addEventListener() method is used to add a click event listener
//  to the button element. When the button is clicked, the toggleState() 
//  function is called.
button.addEventListener('click', toggleState)


