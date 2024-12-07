function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
  
    errorElement.innerText = '';
  
    if (num1 === '' || num2 === '' || isNaN(num1) || isNaN(num2)) {
      errorElement.innerText = "Будь ласка, введіть коректні числові значення в обидва поля.";
      resultElement.innerText = "Результат: -";
      return;
    }
  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
  
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          errorElement.innerText = "На нуль ділити не можна.";
          resultElement.innerText = "Результат: -";
          return;
        }
        result = number1 / number2;
        break;
      default:
        errorElement.innerText = "Невідома операція.";
        return;
    }
  
    result = Math.round(result * 100) / 100;
  
    resultElement.innerText = `Результат: ${result}`;
  }