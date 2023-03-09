let num1;
let num2;
let result;

// function addition () {
//     num1 = parseFloat(document.getElementById('num1').value);
//     num2 = parseFloat(document.getElementById('num2').value);
//     console.log(num1);
//     console.log(num2);

//     result = num1 + num2 ;
//     document.getElementById('result').innerHTML = 'Result:' + result ;

   
// }
function total(op) {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    if (op == "+") {
        result = num1 + num2 ;
    } else if (op == '-') {
        result = num1 - num2;
    } else if (op == '*') {
        result = num1 * num2;
    } else
        result = num1 / num2;
    

document.getElementById('result').innerHTML = 'Result:' + result ;
       
}