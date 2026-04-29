let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==========================
// SAVE CART
// ==========================
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ==========================
// CART COUNT
// ==========================
function updateCartCount() {
    let count = document.getElementById("cart-count");

    if (count) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.innerText = totalItems > 0 ? totalItems : "";
    }
}

// ==========================
// ADD TO CART (GALLERY)
// ==========================
function addToCart(name, price, image, id) {

    let sizeSelect = document.getElementById("size-" + id);
    let size = sizeSelect ? sizeSelect.value : "N/A";

    let existing = cart.find(
        item => item.name === name && item.size === size
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            size: size,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showMessage("Added to cart!");
}

// ==========================
// SHOW CART PAGE
// ==========================
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
                    <p>Size: ${item.size}</p>

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

// ==========================
// QTY CONTROLS (CART PAGE)
// ==========================
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

// ==========================
// CLEAR CART
// ==========================
function clearCart() {
    cart = [];
    saveCart();
    showCart();
    updateCartCount();
}

// ==========================
// PAY NOW BUTTON
// ==========================
function payNow() {
    if (cart.length === 0) {
        showMessage("Cart is empty!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    alert("Payment Successful!\nTotal Paid: $" + total);

    cart = [];
    saveCart();
    showCart();
    updateCartCount();
}

// ==========================
// IMAGE ZOOM
// ==========================
function openImage(src) {
    let modal = document.getElementById("image-modal");
    let img = document.getElementById("modal-img");

    modal.style.display = "flex";
    img.src = src;
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}

// ==========================
// POPUP MESSAGE
// ==========================
function showMessage(text) {
    let msg = document.createElement("div");
    msg.className = "added-msg";
    msg.innerText = text;

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
}

// ==========================
// INIT
// ==========================
window.onload = function () {
    updateCartCount();

    if (document.getElementById("cart-items")) {
        showCart();
    }
};