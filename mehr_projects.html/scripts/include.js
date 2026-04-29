document.addEventListener("DOMContentLoaded", function () {

    // LOAD HEADER
    fetch("./components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // re-run cart count AFTER header loads
            if (typeof updateCartCount === "function") {
                updateCartCount();
            }
        })
        .catch(err => console.error("Header load error:", err));

    // LOAD FOOTER
    fetch("./components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error("Footer load error:", err));

});