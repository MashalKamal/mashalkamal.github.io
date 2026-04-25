document.addEventListener("DOMContentLoaded", function () {

  let currentIndex = 0;

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

  const slide = document.getElementById("slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function showSlide() {
    slide.src = images[currentIndex];
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide();
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide();
  });

  // Auto play
  setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide();
  }, 3000);

});