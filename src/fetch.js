const productList = [];

for(let i = 0; i < 20; i++) {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => productList[i] = data)
}

console.log(productList);