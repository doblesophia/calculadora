// Obtener los elementos de la calculadora
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

// Asignar el evento click a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el valor del botón clickeado
    const value = button.getAttribute('data-value');

    // Realizar la acción correspondiente al valor del botón
    if (value === 'C') {
      display.textContent = '';
    } else if (value === '=') {
      try {
        const result = evaluateExpression(display.textContent);
        display.textContent = result;
      } catch {
        display.textContent = 'Error';
      }
    } else {
      display.textContent += value;
    }
  });
});

// Función para evaluar la expresión matemática ingresada
function evaluateExpression(expression) {
  const operators = ['+', '-', '*', '/'];
  let currentOperator = null;
  let currentNumber = '';
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (operators.includes(char)) {
      if (currentOperator) {
        result = calculateResult(result, parseFloat(currentNumber), currentOperator);
      } else {
        result = parseFloat(currentNumber);
      }

      currentOperator = char;
      currentNumber = '';
    } else {
      currentNumber += char;
    }
  }

  if (currentOperator) {
    result = calculateResult(result, parseFloat(currentNumber), currentOperator);
  } else {
    result = parseFloat(currentNumber);
  }

  return result;
}

// Función para realizar el cálculo entre dos números y un operador
function calculateResult(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Operador no válido');
  }
}
