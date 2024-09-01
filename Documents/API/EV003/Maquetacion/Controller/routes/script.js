// Obtener productos y mostrarlos
fetch('/api/products')
    .then(response => response.json())
    .then(data => {
        const productsDiv = document.getElementById('products');
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsDiv.appendChild(productElement);
        });
    });

function addToCart(productId) {
    fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(() => alert('Product added to cart!'));
        });
}
