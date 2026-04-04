function loadComponent(id, file) {
    fetch(file)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            var element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            }
        })
        .catch(function(error) {
            console.log("Error loading component:", error);
        });
}

/* Load components AFTER page loads */
window.onload = function () {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
};

/* Add to Cart Function */
function addToCart(item) {
    alert(item + " added to cart!");
}