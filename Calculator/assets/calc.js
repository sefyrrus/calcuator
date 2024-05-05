function calculate(operation) {
    var numA = parseInt(document.getElementById('num1').value);
    var numB = parseInt(document.getElementById('num2').value);

    var result;


  
    switch (operation) {
      case 'add':
        result = numA + numB;
        break;
      case 'subtract':
        result = numA - numB;
        break;
      case 'multiply':
        result = numA * numB;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = numA / numB;
        } else {
          result = "Cannot divide by zero";
        }
        break;
      default:
        result = "Invalid operation";
    }
  
    document.getElementById('result').innerText = "Result: " + result;
  }