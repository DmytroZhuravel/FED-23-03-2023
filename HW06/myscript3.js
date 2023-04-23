// Отримати від користувача через promt  значення name  вивести в консоль, першу і останню літеру з name


let name = prompt("Введіть ваше ім'я:");
console.log("Перша літера: " + name[0]);
console.log("Остання літера: " + name[name.length - 1]);