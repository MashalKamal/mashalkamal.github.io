let cart = JSON.parse(localStorage.getItem("cart")) || [];

// TEMP QUANTITY (START AT 0)
let tempQty = {
    outfit1: 0,
    outfit2: 0,
    outfit3: 0,
    outfit4: 0,
    outfit5: 0,
    outfit6: 0,
    outfit7: 0,
    outfit8: 0
};

// SAVE CART
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// CART COUNT (HIDE 0)
function updateCartCount() {
    let count = document.getElementById("cart-count");

    if (count) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.innerText = totalItems > 0 ? totalItems : "";
    }
}

// CHANGE QUANTITY (+ / -)
function changeQty(id, change) {
    tempQty[id] += change;

    if (tempQty[id] < 0) tempQty[id] = 0;

    let el = document.getElementById("qty-" + id);
    if (el) el.innerText = tempQty[id];
}

// ADD TO CART
function addToCart(name, price, image, id) {

    let qty = tempQty[id];

    if (qty === 0) {
        showMessage("Select quantity first");
        return;
    }

    let existing = cart.find(item => item.name === name);

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

    // reset quantity after adding
    tempQty[id] = 0;
    let el = document.getElementById("qty-" + id);
    if (el) el.innerText = 0;

    saveCart();
    updateCartCount();

    showMessage("Added to cart!");
}

// SHOW CART PAGE
function showCart() {
    let output = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];

        output += `
        <div class="cart-item">

            <div class="cart-row">

                <img src="${item.image}" onclick="openImage('${item.image}')">

                <div class="cart-info">

                    <h3>${item.name}</h3>

                    <p class="price">$${item.price}</p>

                    <div class="qty-controls">
                        <button onclick="decreaseQty(${i})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQty(${i})">+</button>
                    </div>

                    <p>Total: $${item.price * item.quantity}</p>

                </div>

            </div>

        </div>
        `;

        total += item.price * item.quantity;
    }

    document.getElementById("cart-items").innerHTML =
        output || "<p>No items in cart</p>";

    document.getElementById("total").innerText = total;
}

// CART QTY CONTROL
function increaseQty(i) {
    cart[i].quantity++;
    saveCart();
    showCart();
    updateCartCount();
}

function decreaseQty(i) {
    cart[i].quantity--;

    if (cart[i].quantity <= 0) {
        cart.splice(i, 1);
    }

    saveCart();
    showCart();
    updateCartCount();
}

// CLEAR CART
function clearCart() {
    cart = [];
    saveCart();
    showCart();
    updateCartCount();
}

// IMAGE ZOOM
function openImage(src) {
    document.getElementById("image-modal").style.display = "flex";
    document.getElementById("modal-img").src = src;
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}

// POPUP MESSAGE
function showMessage(text) {
    let msg = document.createElement("div");
    msg.className = "added-msg";
    msg.innerText = text;

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
}

// INIT
window.onload = function () {
    updateCartCount();

    if (document.getElementById("cart-items")) {
        showCart();
    }
};