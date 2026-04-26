// ==========================
// 🛒 SHOPPING CART SYSTEM
// ==========================

let cart = [];

// Add item to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });

    alert(name + " added to cart!");

    updateCartCount();
}

// Update cart number in navbar
function updateCartCount() {
    let count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cart.length;
    }
}

// Show cart items in cart.html
function showCart() {
    let output = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        output += `
            <p>
                ${cart[i].name} - $${cart[i].price}
            </p>
        `;
        total += cart[i].price;
    }

    document.getElementById("cart-items").innerHTML = output;
    document.getElementById("total").innerText = total;
}