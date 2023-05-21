// Obtener los elementos de la calculadora
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

// Asignar el evento click a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el valor del botón clickeado
    const value = button.getAttribute('data-value');
    
    // Realizar la acción correspondiente al valor del botón
    switch(value) {
      case 'ac':
        display.textContent = '';
        break;
      case '=':
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = 'Error';
        }
        break;
      default:
        display.textContent += value;
        break;
    }
  });
});

