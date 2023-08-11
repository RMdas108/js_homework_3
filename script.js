// "use strict";
// // Завдання 1. Покращений "Dialog-Windows" калькулятор

// let should_exit = false;
// function showModal(message) {
//   const user_input = message;
//  console.log(user_input);
//   if (user_input === "exit") {
//     should_exit = true;
    
//     console.log(user_input, should_exit);
//   } else {
//     console.log(user_input, should_exit);
//     return message;
    
//   }
// }

// // Головний цикл програми
// while (!should_exit) {
//   function pasteNumber(x) {
//     while (isNaN(x) == true || x == null || (operation == "/" && x == 0)) {
//       x = prompt("Все ж введіть число");
//     }
//     return x;
//   }

// var first_number = prompt(
//   "Введіть, будь ласка, перше число... \nЯкщо хочете вийти з програми, наберіть exit"
// );

// first_number = +pasteNumber(showModal(first_number));


// var operation = prompt(
//   "Введіть, будь ласка, операцію (+, -, *, /) ... \nЯкщо хочете вийти з програми, наберіть exit"
// );
// while (
//   operation !== "+" &&
//   operation !== "-" &&
//   operation != "*" &&
//   operation !== "/"
// ) {
//   operation = prompt("Невідома операція. Спробуйте ввести ще раз.");
// }

// operation = showModal(operation);
// var second_number = prompt(
//   "Введіть, будь ласка, друге число... \nЯкщо хочете вийти з програми, наберіть exit"
// );

// second_number = +pasteNumber(showModal(second_number));

// performCalculation();

// function performCalculation() {
//   let result = null;
//   switch (operation) {
//     case "+":
//       result = first_number + second_number;
//       break;
//     case "-":
//       result = first_number - second_number;
//       break;
//     case "*":
//       result = first_number * second_number;
//       break;
//     case "/":
//       result = first_number / second_number;
//       break;
//   }
//   alert(
//     `Результатом арифметичної дії ${first_number} ${operation} ${second_number} буде ${result}`
//   );
  

// }
// alert("До побачення!")

// let goods = +prompt('Введіть кількість товарів більше 19 товарів');
// let ending;
// let last_c;
// if (goods >= 20){
//  last_c = goods % 10;
// }
// else {last_c = goods;
// }
// if (last_c === 1){
//   ending = 'товар';
// }
// else if (last_c >= 2 && last_c <= 4){
//   ending = 'товари';
// }
// else {ending = 'товарів'; }
  
// alert(
//   `Ви ввели ${goods}  ${ending}.`
// )
// let str = '<ul>'
// for (let i = 0; i < 5; i++){
//  let num = prompt('Введіть число...');
//  if (num % 3 == 0){ str += '<li style="color:red;">'+ num + '</li>';}
//  else{ str += '<li>'+ num + '</li>';}
//     };
//     str+= '</ul>';
// document.write(str);
let num = 0;
while(num !== 6){
num = prompt('Введіть число 6')};
console.log('')
