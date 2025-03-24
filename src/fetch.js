export const productList = [];

for(let i = 1; i <= 20; i++) {
  await fetch(`https://fakestoreapi.com/products/${i}`)
    .then(response => response.json())
    .then(data => productList[i] = data)
}

console.log(productList);