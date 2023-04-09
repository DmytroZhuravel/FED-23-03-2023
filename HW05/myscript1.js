// Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення
//  "Remove" ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] 
//  в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]


let originalArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
let newArray = (originalArray.filter((index)=> index !== "Remove"));

console.log(newArray); 