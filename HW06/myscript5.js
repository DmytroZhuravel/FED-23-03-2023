// Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя,( задача на повторення Math властивостей). Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20

function Century(year) {
    return Math.ceil(year / 100);
  }
  console.log(Century(1810)); 
  console.log(Century(1700)); 
  console.log(Century(1601)); 
  console.log(Century(2000)); 
    