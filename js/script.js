'use strict';

const TOTAL_SEC = 1 * 10; // Initial value: 10 sec

const timer       = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton  = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const pauseButton = document.getElementById('pause');

let remainingSec; // Use to store the remaining seconds
let interval; // Use to hold a reference to the interval

// Helper function to transform this: '100' (seconds) to this '01:40'
function toMinAndSec(sec) {
  console.log(sec);

  let m = (Math.floor(sec / 60) + '').padStart(2, '0');
  let s = (sec % 60 + '').padStart(2, '0');

  return `${m}:${s}`;
}

// Show remaining time to the 'timer' element
function show() {
  timer.innerHTML = toMinAndSec(remainingSec);
}

// Decrease remaining time and show the result
// If there is no remaining time, stop the timer
function tick() {
  if (remainingSec > 0) {
    remainingSec -= 1;
  } else {
    // TODO [OK]: Stop/Clear the interval
    stop(); //see stopButton
  }
  show();
}

/*
 * Start button
 * -------------------- */

startButton.addEventListener('click', () => {
  // TODO [OK]: Set an interval to 1 sec, that calls the 'tick' function. Store the interval reference to the global 'interval' variable, so that you can clear it afterwards.
  interval = window.setInterval(tick, 1 * 1000);
});

/*
 * Stop button
 * -------------------- */

stopButton.addEventListener('click', stop = () => { //modified arrow function name so i can use it in tick function
  // TODO [OK]: Reset the remaining seconds to their initial value
  remainingSec = TOTAL_SEC;
  // TODO [OK]: Stop/Clear the interval
  clearInterval(interval);
  // TODO [OK]: Use the appopriate (existing) function to show the remaining time on the page
  show();
});

/*
 * Reset button
 * -------------------- */

resetButton.addEventListener('click', () => {
  // TODO [OK]: Reset the remaining seconds to their initial value
  remainingSec = TOTAL_SEC;
  // TODO [OK]: Use the appopriate function to show the remaining time on the page
  show();
});

/*
 * Pause button
 * -------------------- */

pauseButton.addEventListener('click', () => {
  // TODO [OK]: Clear the interval
  clearInterval(interval);
});

/*
 * Initialization
 * -------------------- */

document.addEventListener('DOMContentLoaded', () => {
  remainingSec = TOTAL_SEC;
  show();
});
