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