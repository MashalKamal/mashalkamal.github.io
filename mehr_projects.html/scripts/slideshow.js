const images = [
    "images/outfit1.jpg",
    "images/outfit2.jpg",
    "images/outfit3.jpg",
    "images/outfit4.jpg",
    "images/outfit5.jpg",
    "images/outfit6.jpg",
    "images/outfit7.jpg",
    "images/outfit8.png",
    "images/Sitemap.PNG",
    "images/Wireframe.PNG"
];

let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

// start slideshow properly
document.addEventListener("DOMContentLoaded", function () {
    showSlide();

    setInterval(() => {
        nextSlide();
    }, 3000);
});