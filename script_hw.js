
// 'use strict'
// //Task 1
// let width = prompt("Введіть , будь ласка, ширину прямокутника...");
// let height = prompt("Введіть , будь ласка, висоту прямокутника...");
// if (width === height) {
//   alert("Прямокутник є квадратом");
// } else {
//   alert("Це звичайний прямокутник");
// }
// //Task 2
// let password = prompt("Введіть, будь ласка, Ваш пароль...");
// if (password === "Step" || password === "Web" || password === "JavaScript") {
//   alert("Підтверджено.");
// } else {
//   alert("Скасовано.");
// }
// //Task 3 і Task 3a
// let sideA = +prompt("Введііть довжину сторони трикутника A...");
// let sideB = +prompt("Введііть довжину сторони трикутника B...");
// let sideC = +prompt("Введііть довжину сторони трикутника C...");
// if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
//   console.log(`Такий трикутник існує. Його периметр ${sideA + sideB + sideC}`);
// } else {
//   console.log("Такого трикутника не існує.");
// }
// //Task 4
// let nameUser = prompt("Ваше ім'я: ");
// let income = +prompt("Щомісячний дохід: ");
// let transportExpenses = +prompt("Сума транспортних витрат: ");
// let foodExpenses = +prompt("Сума витрат на харчування: ");
// let utilityExpenses = +prompt("Сума витрат на комунальні послуги: ");
// // Обчислення
// const totalIncome = income;
// const totalExpenses = transportExpenses + foodExpenses + utilityExpenses;
// const remainingFunds = totalIncome - totalExpenses;
// const averagePerDay = remainingFunds / 30;

// // Вивід результатів
// console.log("Залишок коштів: " + remainingFunds);
// console.log("Середня сума на день: " + averagePerDay);

// if (averagePerDay < 1000) {
//   console.log("Рівень доходу: низький");
// } else if (averagePerDay >= 1000 && averagePerDay <= 2000) {
//   console.log("Рівень доходу: нормальний");
// } else {
//   console.log("Рівень доходу: високий");
// }
// //Task 5
// let number1 = +prompt("Введіть перше число:");
// let number2 = +prompt("Введіть друге число:");
// let maxNumber = number1 > number2 ? number1 : number2;
// alert("Більше число: " + maxNumber);
// //Task 6
// let number = +prompt("Введіть число:");
// number % 5 === 0
//   ? alert(`Число ${number} кратне 5`)
//   : alert(`Число ${number} НЕ кратне 5`);
// //Task 7
// let planetName = prompt("Введіть назву планети:");
// let greeting = (planetName === 'земля'|| planetName === 'Земля') ? 'Привіт, землянине!' : 'Привіт, інопланетянине!';
// alert(greeting);
// //Task 8

// let userInput = prompt("Введіть число від 1 до 7:");
// let dayNumber = +userInput;
// switch (dayNumber) {
//     case 1:
//         alert("Понеділок");
//         break;
//     case 2:
//         alert("Вівторок");
//         break;
//     case 3:
//         alert("Середа");
//         break;
//     case 4:
//         alert("Четвер");
//         break;
//     case 5:
//         alert("П'ятниця");
//         break;
//     case 6:
//         alert("Субота");
//         break;
//     case 7:
//         alert("Неділя");
//         break;
//     default:
//         alert("Неправильні дані. Введіть число від 1 до 7.");
// }

// // Task 9

// let valHryvnya = +prompt('Введіть, будь ласка, суму у гривнях ₴');
// let nameCurrency = prompt('Яку валюти Ви хотіли придбати?');
// let text ='Ви отримаєте';
// switch(nameCurrency){
//   case 'долар':
//     alert(`${text} ${parseInt(valHryvnya/36.5686)}$.`);
//     break;
//     case 'євро':
//     alert(`${text} ${parseInt(valHryvnya/40.284)}€.`);
//     break;
//     case 'злотий':
//     alert(`${text} ${parseInt(valHryvnya/9.0315)}zł.`);
//     break;
//     case 'фунт стерлінгів':
//     alert(`${text} ${parseInt(valHryvnya/46.6688)}£.`);
//     break;
//     default: 
//     alert('У нас немає такої валюти');
// }
//Task 10

let firstNumber = +prompt("Введіть, будь ласка, перше число...");
let secondNumber = +prompt("Введіть, будь ласка, друге число...");
let signAction = prompt("Введіть, будь ласка, знак дії (+, –, *, /)..."); 
switch(signAction){
case '+':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber + secondNumber}`);
   break;
case '-':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber - secondNumber}`);
   break;
case '*':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber * secondNumber}`);
  break;
case '/':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber / secondNumber}`);
   break;
}
