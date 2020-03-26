let requestURL = 'https://gsthorne.github.io/js-lab4/wacky.json';

let container = document.getElementById('container');

// get the json from the server
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// when the request loads, save the wacky things to a variable and print them to the screen
request.onload = function() {
  let wackyProducts = request.response;
  console.log(wackyProducts);
  productDetails(wackyProducts);
}

function productDetails(jsonObj) {
  let products = jsonObj.wackyThings;

  for (let i = 0; i < products.length; i++) {
    // article to hold product
    let article = document.createElement('article');

    // name of product
    let h2 = document.createElement('h2');
    h2.textContent = products[i].name;
    article.appendChild(h2);

    // image of product
    let img = document.createElement('img');
    img.setAttribute('src', 'https://gsthorne.github.io/js-lab4/img/' + products[i].image);
    img.setAttribute('alt', products[i].image);
    article.appendChild(img);

    // price of product
    let price = document.createElement('p');
    price.textContent = "Price: $" + products[i].price;
    article.appendChild(price);

    // description of product
    let desc = document.createElement('p');
    desc.textContent = products[i].details;
    article.appendChild(desc);

    // add article to section
    container.appendChild(article);
  }
}
