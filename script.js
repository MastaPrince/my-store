async function loadProducts() {

  const response = await fetch("/.netlify/functions/products");

  const products = await response.json();

  const container = document.getElementById("products");

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="card">
        <h2>${product.name}</h2>
        <p class="price">₱${product.price}</p>
        <button>Buy Now</button>
      </div>
    `;

  });

}

loadProducts();