let arr = [];   
function ThisFoo(argument) {

    
do {

  let  calculation;
  let firstOperand;
  let secondOperand;
  let oneOperand;
  let result;

  if (calculation !== calculation) {
    do {
        calculation = +prompt('Send Number');
     }  while (calculation !== calculation);
  }

do {
  calculation = +prompt('Chose operation ...\n 1 - sum\n 2 - dif\n 3 - div\n 4 - mult\n 5 - sin\n 6 - cos\n 7 - pow\n 0 - other, exit');
} while (calculation < 7 && calculation <= 0);




    if (calculation <= 4) {
     firstOperand = +prompt('Send  first Operand');
      secondOperand = +prompt('Send second Operand');
    }
    
   else if (5 <= calculation) {
         oneOperand = +prompt('send operand');
    }



switch (calculation) {
  case 1:
    result = firstOperand + secondOperand;
    break;
case 2:
    result = firstOperand / secondOperand;
    break;
case 3:
    result = firstOperand - secondOperand;
    break;
case 4:
    result = firstOperand * secondOperand;
    break;
case 5:
    result = Math.sin(oneOperand);
    break;
case 6:
    result = Math.cos(oneOperand);
    break;
case 7:
    result = Math.pow(oneOperand, 2);
    break;
}


alert(result);
    arr.push(result);   
    console.log(`Story of calculation ${result}` );
  


} while (confirm('You want repeat?'));
};
ThisFoo()

// do {
// let calculation;

// do {

// calculation = +prompt('Chose operation ...\n 1 - sum\n 2 - dif\n 3 - div\n 4 - mult\n 5 - sin\n 6 - cos\n 7 - pow\n 0 - other, exit');



// } while (calculation > 7 || calculation <= 0);

// let calculateOperation = '';

// if (calculation < 5) {
//     calculateOperation = 'Chose first operand';
// } else {
//     calculateOperation = 'Chose operand';
// }

// let firstOperand;
// do {
//     firstOperand = +prompt(calculateOperation);
// } while (firstOperand !== firstOperand);


// let secondOperand;
// if (calculation < 5) {
//     do {
//         secondOperand = +prompt('Chose second operand');
//     } while (secondOperand !== secondOperand);

    
// }

// let result;

// switch(calculation) {
    // case 1:
    //     result = firstOperand + secondOperand;
    //     break;
    // case 2:
    //     result = firstOperand / secondOperand;
    //     break;
    // case 3:
    //     result = firstOperand - secondOperand;
    //     break;
    // case 4:
    //     result = firstOperand * secondOperand;
    //     break;
    // case 5:
    //     result = Math.sin(firstOperand);
    //     break;
    // case 6:
    //     result = Math.cos(firstOperand);
    //     break;
    // case 7:
    //     result = Math.pow(firstOperand, 2);
    //     break;
// }

// console.log(result);
// alert(result);
// } while (confirm('You want repeat?'));

