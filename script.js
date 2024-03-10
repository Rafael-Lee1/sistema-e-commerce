const products = [
    { id: 1, name: "Produto 1", price: 100 },
    { id: 2, name: "Produto 2", price: 80 }
    // Adicione mais produtos aqui
];

const cartItems = [];

function renderProducts() {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = `produto${product.id}.jpg`;
        img.alt = product.name;

        const h2 = document.createElement("h2");
        h2.textContent = product.name;

        const pDescription = document.createElement("p");
        pDescription.textContent = `Descrição do ${product.name}`;

        const pPrice = document.createElement("p");
        pPrice.textContent = `Preço: $${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Adicionar ao Carrinho";
        button.addEventListener("click", () => addToCart(product.id));

        productDiv.appendChild(img);
        productDiv.appendChild(h2);
        productDiv.appendChild(pDescription);
        productDiv.appendChild(pPrice);
        productDiv.appendChild(button);

        productsContainer.appendChild(productDiv);
    });
}

function renderCart() {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = "";

    let totalPrice = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${products.find(product => product.id === item.id).name} - $${item.price}`;
        cartItemsList.appendChild(li);

        totalPrice += item.price;
    });

    document.getElementById("cartTotal").textContent = `$${totalPrice}`;
}

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cartItems.push({ id: product.id, price: product.price });
    renderCart();
}

function checkout() {
    // Aqui você pode implementar a lógica de checkout, como processar o pagamento.
    // Por simplicidade, apenas esvaziamos o carrinho neste exemplo.
    cartItems.length = 0;
    renderCart();
    alert("Compra realizada com sucesso!");
}

// Inicialize a renderização dos produtos
renderProducts();
