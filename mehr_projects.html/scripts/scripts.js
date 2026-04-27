let cart = JSON.parse(localStorage.getItem("cart")) || [];

// TEMP QUANTITY STORAGE
let tempQty = {
    outfit1: 1,
    outfit2: 1,
    outfit3: 1,
    outfit4: 1,
    outfit5: 1,
    outfit6: 1,
    outfit7: 1,
    outfit8: 1
};

// SAVE
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// COUNT
function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// CHANGE QTY IN GALLERY
function changeTempQty(id, change) {
    tempQty[id] += change;
    if (tempQty[id] < 1) tempQty[id] = 1;
    document.getElementById("qty-" + id).innerText = tempQty[id];
}

// ADD TO CART WITH QTY
function addToCartWithQty(name, price, image, id) {

    let qty = tempQty[id];

    let existing = cart.find((item) => item.name === name);

    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity: qty
        });
    }

    tempQty[id] = 1;
    document.getElementById("qty-" + id).innerText = 1;

    saveCart();
    updateCartCount();
}

// SHOW CART
function showCart() {

    let output = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];

        output += `
            <div class="cart-item">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <p>Qty: ${item.quantity}</p>
                <p>Total: $${item.price * item.quantity}</p>
            </div>
        `;

        total += item.price * item.quantity;
    }

    document.getElementById("cart-items").innerHTML =
        output || "<p>No items in cart</p>";

    document.getElementById("total").innerText = total;
}

// INIT
window.onload = function () {
    updateCartCount();
    if (document.getElementById("cart-items")) {
        showCart();
    }
};