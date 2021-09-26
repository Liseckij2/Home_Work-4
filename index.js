let calculation;
let firstOperand;
let secondOperand;
let result;
let history = [];

function calculationFunction(params) {
    do {
    do {
    calculation = +prompt('Chose operation ...\n 1 - sum\n 2 - dif\n 3 - div\n 4 - mult\n 5 - sin\n 6 - cos\n 7 - pow\n 0 - other, exit');
} while (calculation !== calculation);
} while(calculation >= 8);
if (calculation >= 1 && calculation <= 4 ) {
   firstOperand = +prompt('First operand');
   secondOperand = +prompt ('Second operand');
}
 if(calculation >= 5) {
    firstOperand = +prompt('Operand');
}
return calculation,firstOperand,secondOperand;
};

function calculationNumbers() {
    
switch(calculation) {

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
        result = Math.sin(firstOperand);
        break;
    case 6:
        result = Math.cos(firstOperand);
        break;
    case 7:
        result = Math.pow(firstOperand, 2);
        break;

}
return alert(result);
}

function addToStory() {
    history.push(result).reverse;
    console.log(history);
}

do {
calculationFunction();
calculationNumbers();
addToStory();
}while(confirm('repeat?'));

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

