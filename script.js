const products = [
{
name:"Product 1",
price:100
},
{
name:"Product 2",
price:200
}
];

const container = document.getElementById("products");

products.forEach(product=>{

container.innerHTML += `
<div class="card">
<h2>${product.name}</h2>
<p>₱${product.price}</p>
<button>Buy Now</button>
</div>
`;

});