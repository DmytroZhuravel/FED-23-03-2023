
// Створіть конструктор CatConstructor який створює обєкт з ключати age, nema, bread ( порода ), color.
//  Використайте цей конструктор щоб створити 3 кота

function CatConstructor(age, name, breed, color) {
    this.age = age;
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  let cat1 = new CatConstructor(5, "Mars", "Persian", "Grey");
  let cat2 = new CatConstructor(3, "Simba", "no breed", "polkadot");
  let cat3 = new CatConstructor(1, "Tiger", "British Shorthair", "White");
  
  console.log(cat1);
  console.log(cat2);
  console.log(cat3);


//   Створіть масив, помістіть туди створених котів і відфільтруйте массив за віком котів

function CatConstructor(age, name, breed, color) {
        this.age = age;
        this.name = name;
        this.breed = breed;
        this.color = color;
      }

 let cats = [

   new CatConstructor(5, "Mars", "Persian", "Grey"),
   new CatConstructor(3, "Simba", "no breed", "polkadot"),
   new CatConstructor(1, "Tiger", "British Shorthair", "White")

 ];

 let filteredCats = cats.filter(cat => cat.age >= 2);
 console.log (filteredCats);