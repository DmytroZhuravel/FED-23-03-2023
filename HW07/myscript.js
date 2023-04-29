window.onload = () => {
// Отримати кожеш елемент з html документу в змінні

let header = document.querySelector('header');

let navItems = document.querySelectorAll('nav ul li');

let main = document.querySelector('main');

let footer = document.querySelector('footer');


// Створити змінну з массивом і заповнити всі li елементи данними з масиву

const data = ['menu_item1', 'menu_item2', 'menu_item3'];
let ul = document.querySelector('ul');

data.forEach(item => {
  let li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});



// Створіть функцію яка приймає массив обєктів і створює div з классом product-list в якому є карторчки 
// товару в вигляді діва з класом card  в середині інформація з обєкте

function renderProductList(products) {
    const productList = document.createElement('div');
    productList.classList.add('product-list');
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('h2');
      title.textContent = product.title;
      card.appendChild(title);
  
      const price = document.createElement('p');
      price.textContent = `Price: ${product.price} $`;
      card.appendChild(price);
  
      const description = document.createElement('p');
      description.textContent = product.description;
      card.appendChild(description);
  
      productList.appendChild(card);
    });
  
    document.body.appendChild(productList);
  }
  
  const products = [
    {
      title: 'item 1',
      price: 10.00,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'item 2',
      price: 20.01,
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      title: 'item 3',
      price: 30.00,
      description: 'Aliquam non velit non neque gravida iaculis.'
    }
  ];
  
  renderProductList(products);
}  