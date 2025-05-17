
let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');
let numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
let operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
let decimalButton = document.getElementById('decimal');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    display.value = currentNumber;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    currentOperator = button.textContent;
  });
});

equalsButton.addEventListener('click', () => {
  let result;
  switch (currentOperator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  display.value = result;
  currentNumber = result.toString();
  previousNumber = '';
  currentOperator = '';
});

clearButton.addEventListener('click', () => {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  currentOperator = '';
});

backspaceButton.addEventListener('click', () => {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
});

decimalButton.addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    display.value = currentNumber;
  }
});