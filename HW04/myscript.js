// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа, після 
// чого розміщує в новому масиві. Функція повина повертати массив з парними номерами.


function EvenNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(EvenNumbers([45, 67, 90, 1, 0, 56, 78, 11, 50, 99]));


//   Створити функцію яка 3 рази виводить prompt  запитує що купити і 
//   вводить отримані данні в массив. Після цього повертає массив


function List() {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const a = prompt("What do you want to buy?");
      result.push(a);
    }
    return result;
  }

  let shop = List();
  console.log (shop);

//   Напишіть функцію яка отримує як аргумент довільний  массив цифр і повертає сумму всіх значень массиву

function myfunction(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
console.log (myfunction ([5, 67, 90, 1, 0, 56, 78, 11, 50, 99]))

// Створіть функцію з іменем congrat, яка отримує значення рік народження, а повертає вік користувача


function congrat(yob) {
    const yearnow = 2023;
    const age = yearnow - yob;
    return age;
    
  }
  let a = prompt ("Please enter your year of birth");
  console.log (congrat(a));

// Створіть функцію яка отримує массив цифрових значень (різні роки) і колбек функцію яку
//  ви створили congrat. Поверніть новий массив зі значенням "Вік користувача і розрахунок з колбек функції"

// ??????//


// Створіть пустий обєкт productDetail і декілька викликів prompt які заповнять інформацію 
// про товар (Назва продукту, ціна продукта, колір, наявність знижки) тут робота на знайомство з синтаксисом обєктів

let productDetail = {
name : prompt('Введіть назву продукту:'),
price : parseFloat(prompt('Введіть ціну продукту:')),
color : prompt('Введіть колір продукту:'),
discount : confirm('Чи є знижка на продукт?'),

}

// Створити функцію яка задає в обєкт cordinat рандомні значення left i top.
//  Максимальне значення лефт це 1000 максимальне значення top це 100


function Coordinates(cordinat) {
    cordinat.left = Math.floor(Math.random() * 1000); 
    cordinat.top = Math.floor(Math.random() * 100); 
  }

  let cordinat = {};

Coordinates(cordinat); 

console.log(cordinat.left, cordinat.top);