// Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вікв функції конструкторі повиний бути метод виводу інформації про юзера. 
//     Метод повинен бути винесений в прототип.
    
function User() {
    this.firstName = prompt("Введіть ім'я:");
    this.lastName = prompt("Введіть прізвище:");
    this.age = prompt("Введіть вік:");
  }
  let user1 = new User();
  User.prototype.getInfo = function() {
    console.log("Ім'я: " + this.firstName);
    console.log("Прізвище: " + this.lastName);
    console.log("Вік: " + this.age);
  };
  user1.getInfo();