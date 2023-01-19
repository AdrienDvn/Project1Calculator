/////LOOP DO WHILE ////////
// do {
//   var name1 = prompt("what is your name?");

// }while(name1 == "" || name1 == null)

// alert("hello " + name1);


do {
  let action = prompt("What calculus do you want to do ?\n\n 1 - Addition\n 2 - Substraction\n 3 - Mutiply\n 4 - Division\n" );

  let num1 = parseInt(prompt("first number?"))
  let num2 = parseInt(prompt("second number?"))

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Please enter a valid number.");
  }

  function addition(num1,num2) {
    result = num1 + num2;
    return result;
  };

  function substraction(num1,num2) {
    result = num1 - num2;
    return result;
  };

  function multiply(num1,num2) {
    result = num1 * num2;
    return result;
  };


  function division(num1,num2) {
    result = num1 / num2;
    return result;
  };

    switch(action) {
      case "1":
        let result = addition(num1,num2);
        console.log(result);
        break;
      case "2":
        let result = substraction(num1,num2);
        console.log(result);
        break;
      case "3" :
        let result = multiply(num1,num2);
        console.log(result);
        break;
      case "4" :
        let result = division(num1,num2);
        console.log(result);
        break;
      default:
          throw new Error('Please enter choice 1/2/3 or 4.');
    }

  alert("The answer is " + result);


}while(action == "" || action == null)
