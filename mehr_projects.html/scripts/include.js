document.addEventListener("DOMContentLoaded", function () {

    fetch("./components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(err => console.error("Header load error:", err));

    fetch("./components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error("Footer load error:", err));

});