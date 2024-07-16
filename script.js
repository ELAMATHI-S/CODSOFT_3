const resultOutput = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});


function handleButtonClick(event) {
  const button = event.target;
  const value = button.textContent;

  if (value === "=") {
    calculateResult();
  } else {
    appendValue(value);
  }
}

function appendValue(value) {
  const currentValue = resultOutput.textContent;
  resultOutput.textContent = currentValue + value;
}

function calculateResult() {
  const expression = resultOutput.textContent;
  const result = eval(expression);
  resultOutput.textContent = result;
}

