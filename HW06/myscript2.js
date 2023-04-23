// Створити функцію сорт яка  отримує  массив з створеними обєктами юзер і сортує їх по віку ( в порядку зростання)

function sortUsersByAge(users) {
    users.sort(function(a, b) {
      return a.age - b.age;
    });
    return users;
  }
  let users = [
    { name: 'Eric', age: 64 },
    { name: 'Julia', age: 28 },
    { name: 'Tom', age: 44 }
  ];
  
 let sortedUsers = sortUsersByAge(users);
  
  console.log(sortedUsers);