var cart = JSON.parse(localStorage.getItem("cart")) || [];

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
    var count = document.getElementById("cart-count");

    if (!count) return;

    var totalItems = cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);

    count.innerText = totalItems;
}

// ==========================
// MESSAGE
// ==========================
function showMessage(text) {
    var msg = document.createElement("div");
    msg.className = "added-msg";
    msg.innerText = text;

    document.body.appendChild(msg);

    setTimeout(function () {
        msg.remove();
    }, 2000);
}

// ==========================
// FIND EXISTING ITEM (SAFE VERSION)
// ==========================
function findItem(name, size) {
    var i;

    for (i = 0; i < cart.length; i++) {
        if (cart[i].name === name && cart[i].size === size) {
            return cart[i];
        }
    }

    return null;
}

// ==========================
// ADD TO CART
// ==========================
function addToCart(name, price, image, id) {

    var sizeElement = document.getElementById("size-" + id);
    var size = sizeElement ? sizeElement.value : "M";

    var existing = findItem(name, size);

    if (existing) {
        existing.quantity = existing.quantity + 1;
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
// SHOW CART
// ==========================
function showCart() {

    var container = document.getElementById("cart-items");
    if (!container) return;

    var output = "";
    var total = 0;

    var i;

    for (i = 0; i < cart.length; i++) {

        output =
            output +
            '<div class="cart-item">' +
                '<div class="cart-row">' +
                    '<img src="' + cart[i].image + '" alt="' + cart[i].name + '" onclick="openImage(\'' + cart[i].image + '\')">' +
                    '<div class="cart-info">' +
                        '<h3>' + cart[i].name + '</h3>' +
                        '<p>Size: ' + cart[i].size + '</p>' +
                        '<p>$' + cart[i].price + '</p>' +
                        '<p>Qty: ' + cart[i].quantity + '</p>' +
                        '<p>Total: $' + (cart[i].price * cart[i].quantity) + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        total = total + (cart[i].price * cart[i].quantity);
    }

    container.innerHTML = output || "<p>No items in cart</p>";

    var totalBox = document.getElementById("total");
    if (totalBox) {
        totalBox.innerText = total;
    }
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
// CHECKOUT
// ==========================
function payNow() {
    if (cart.length === 0) {
        showMessage("Cart is empty!");
        return;
    }

    var total = cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    localStorage.setItem("checkoutTotal", total);
    window.location.href = "checkout.html";
}

// ==========================
// IMAGE MODAL
// ==========================
function openImage(src) {
    var modal = document.getElementById("image-modal");
    var img = document.getElementById("modal-img");

    if (modal && img) {
        modal.style.display = "flex";
        img.src = src;
    }
}

function closeImage() {
    var modal = document.getElementById("image-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// ==========================
// INIT
// ==========================
window.onload = function () {
    updateCartCount();
    showCart();
};