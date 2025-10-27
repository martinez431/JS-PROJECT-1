// SIMPLE CLOCK CODE (12-hour format)
function displayclock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 24hr -> 12hr format

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

displayclock();
setInterval(displayclock, 1000);

// SIMPLE CALCULATOR CODE
function simpleCalculator() {
  let num1 = parseFloat(prompt("Enter first number"));
  let num2 = parseFloat(prompt("Enter second number"));
  let operator = prompt("Enter operation (*, -, +, /):");
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("You entered an invalid number");
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num2 === 0 ? "Cannot divide by 0" : num1 / num2;
      break;
    default:
      result = "You entered an invalid operation";
  }
  alert("Result: " + result);
}
