function loadComponent(id, file) {
    fetch(file)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("File not found");
            }
            return response.text();
        })
        .then(function(data) {
            var element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            } else {
                console.log("Element with ID '" + id + "' not found.");
            }
        })
        .catch(function(error) {
            console.log("Error loading component:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});

/* Add to Cart Function */
function addToCart(item) {
    alert(item + " added to cart!");
}