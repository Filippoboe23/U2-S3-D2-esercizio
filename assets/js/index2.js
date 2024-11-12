let count = parseInt(sessionStorage.getItem("timeCounter")) || 0;

function updateCounterDisplay() {
  document.getElementById("counter").textContent = `${count} secondi`;
}

updateCounterDisplay();

setInterval(() => {
  count++;
  sessionStorage.setItem("timeCounter", count);
  updateCounterDisplay();
}, 1000);
