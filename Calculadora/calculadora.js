// Obtener los elementos de la calculadora
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

// Asignar el evento click a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el valor del botón clickeado
    const value = button.getAttribute('data-value');

    // Realizar la acción correspondiente al valor del botón
    if (value === 'ac') {
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
const evaluateExpression = (expression) => {
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
const calculateResult = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    throw new Error('Operador no válido');
  }
}
