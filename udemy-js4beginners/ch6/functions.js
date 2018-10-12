// chapter 6, exercise 1

function english() {
 alert("Hello! Pleased to meet you.");
}

function spanish() {
 alert("Hola. Como estas?");
}

function hebrew() {
 alert("Shalom!");
}

function french() {
 alert("Bon Jour!");
}

function add(a,b) {
 alert( a+b );
}

function subtract(a,b) {
 alert( a-b );
}

function multiply(a,b) {
 alert( a*b );
}

function divide(a,b) {
 alert( a/b );
}

function mathProb(num1, symbol, num2) {
 switch (symbol) {
  case "+":
   alert(num1 + num2 );
   break;
  case "-":
   alert( num1 - num2 );
   break;
  case "*":
   alert( num1 * num2 );
   break;
  case "/":
   alert( num1 / num2 );
   break;
  default:
   document.write("You have not provided the proper operator. Only +, -, *, and / are allowed.");
 }


 
}
