// Створити метод на прототайп для оновлення значень обєкту юзер наприклад змінити імя або вік користувача

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  User.prototype.getInfo = function() {
    console.log(`Ім'я: ${this.firstName}, Прізвище: ${this.lastName}, Вік: ${this.age}`);
  };
  
  User.prototype.updateInfo = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  };
  
  let user1 = new User('John', 'Doe', 40);
  user1.getInfo(); 
  
  user1.updateInfo('Jane', 'Doe', 65);
  user1.getInfo(); 
  