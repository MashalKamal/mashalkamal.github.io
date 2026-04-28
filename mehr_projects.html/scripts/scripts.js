let cart = JSON.parse(localStorage.getItem("cart")) || {};

// update qty
function changeQty(id, change) {
    let span = document.getElementById("qty-" + id);
    let value = parseInt(span.innerText);

    value += change;
    if (value < 0) value = 0;

    span.innerText = value;
}

// add to cart
function addToCart(name, price, image, id) {

    let qty = parseInt(document.getElementById("qty-" + id).innerText);
    let size = document.getElementById("size-" + id).value;

    if (qty === 0) {
        alert("Select quantity first!");
        return;
    }

    let key = name + "-" + size;

    if (cart[key]) {
        cart[key].quantity += qty;
    } else {
        cart[key] = {
            name,
            price,
            image,
            size,
            quantity: qty
        };
    }

    document.getElementById("qty-" + id).innerText = 0;

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart ✔");
}

// image zoom
function openImage(src) {
    document.getElementById("image-modal").style.display = "flex";
    document.getElementById("modal-img").src = src;
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}