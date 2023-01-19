
//FUNCTIONS
function addition(num1,num2) {
    return num1 + num2;
}

function substraction(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function division(num1,num2) {
   if(num2 == 0) {
      throw new Error('not possible to divide by zero.');
    }
    return num1 / num2;
}

// ASKING FOR AN ACTION //
do {
  var action = Number(prompt("What calculus do you want to do ?\n\n 1 - Addition\n 2 - Substraction\n 3 - Mutiply\n 4 - Division\n" ));

} while(action != 1 && action != 2 && action != 3 && action != 4)

// ASKING FOR A NUMBER //
do {
  // ou Number()
  var num1 = parseInt(prompt("Enter the first number :"))
  var num2 = parseInt(prompt("Enter the second number :"))
} while (isNaN(num1) || isNaN(num2))

// CALL THE CHOSEN FUNCTION //
try {
   switch(action) {
        case 1:
          var result = addition(num1,num2);
          break;

        case 2:
          var result = substraction(num1,num2);
          break;

        case 3 :
          var result = multiply(num1,num2);
          break;

        case 4 :
          var result = division(num1,num2);
          break;

        default:
            throw new Error('an error has occured.');
  }
  // DISPLAY THE RESULT //
  alert("The answer is " + result);
}

  catch(error) {
    alert(error); // DISPLAY ERROR IF SMTHG WENT WRONG //
  }
