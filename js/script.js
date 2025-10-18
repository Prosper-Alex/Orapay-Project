function startCounter(elementId, end, duration, suffix = '') {
  let start = 0;
  let incrementTime = duration / end;
  let counter = document.getElementById(elementId);

  if (!counter) return;

  let interval = setInterval(() => {
    start++;
    counter.innerHTML = start + suffix; // <-- using innerHTML here
    if (start >= end) {
      clearInterval(interval);
    }
  }, incrementTime);
}

function startOdometerCounter(elementId, end) {
  let counter = document.getElementById(elementId);

  if (!counter) return;

  counter.innerHTML = end;
}

function main() {
  // startOdometerCounter('counter1', 10, 2000); // count 0 → 30 in 2s
  // startOdometerCounter('counter2', 30, 2000); // count 0 → 50 in 3s
  // startOdometerCounter('counter3', 100, 4000); // count 0 → 100 in 4s
  startOdometerCounter('counter1', '10'); // count 0 → 30 in 2s
  startOdometerCounter('counter2', '30'); // count 0 → 50 in 3s
  startOdometerCounter('counter3', '100'); // count 0 → 100 in 4s
}

window.addEventListener('DOMContentLoaded', main);

// navigation functionality
const navToggle = document.getElementById('navToggle');
const Mobilenav = document.querySelector('.nav_list--wrapper');

function MobileNav() {
  navToggle.classList.toggle('active');
  Mobilenav.classList.toggle('active');
}

navToggle.addEventListener('click', MobileNav);
