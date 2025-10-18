// function startCounter(elementId, end, duration, suffix = "") {
//   let start = 0;
//   let incrementTime = duration / end;
//   let counter = document.getElementById(elementId);

//   let interval = setInterval(() => {
//     start++;
//     counter.innerHTML = start + suffix; // <-- using innerHTML here
//     if (start >= end) {
//       clearInterval(interval);
//     }
//   }, incrementTime);
// }

// // Example usage:
// startCounter("counter1", 10, 2000); // count 0 → 30 in 2s
// startCounter("counter2", 30, 2000); // count 0 → 50 in 3s
// startCounter("counter3", 100, 4000); // count 0 → 100 in 4s

// navigation functionality
const navToggle = document.getElementById("navToggle");
const Mobilenav = document.querySelector(".nav_list--wrapper");

function MobileNav() {
  navToggle.classList.toggle("active");
  Mobilenav.classList.toggle("active");
}

navToggle.addEventListener("click", MobileNav);
