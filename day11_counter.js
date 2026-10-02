// Step 1: Memory Variable (Dabba) jisme number count store hoga
let count = 0;

// Step 2: DOM Selection (HTML Elements ko catch kar rahe hain)
const counterValue = document.getElementById('counter-value');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnIncrease = document.getElementById('btn-increase');

// Helper Function: Visual Color & Text Updates ke liye
function updateUI() {
  counterValue.textContent = count;

  // Condition Logic: Color adjustment based on count value
  if (count > 0) {
    counterValue.style.color = '#10b981'; // Green color for positive
  } else if (count < 0) {
    counterValue.style.color = '#f43f5e'; // Red color for negative
  } else {
    counterValue.style.color = '#ffffff'; // White color for zero
  }
}

// Step 3: Event Listeners (Button Clicks to Action)

// Increase (+1) Button Click
btnIncrease.addEventListener('click', function() {
  count++; // Value ko +1 badhayega
  updateUI();
});

// Decrease (-1) Button Click
btnDecrease.addEventListener('click', function() {
  count--; // Value ko -1 ghatayega
  updateUI();
});

// Reset Button Click
btnReset.addEventListener('click', function() {
  count = 0; // Value wapas zero kar dega
  updateUI();
});