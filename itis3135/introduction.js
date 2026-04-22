document.getElementById("intro-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("output-area").innerHTML =
    "<h3>Form submitted successfully!</h3>";
});

// CLEAR BUTTON (FULL FIX)
document.getElementById("clear-btn").addEventListener("click", function () {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  document.getElementById("current-img").src =
    "https://img.freepik.com/premium-vector/cute-girl-study-with-computer-vector-illustration-white_835895-6032.jpg";
});

// ADD COURSE
document.getElementById("add-course").addEventListener("click", function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Dept">
    <input placeholder="Number">
    <input placeholder="Name">
    <input placeholder="Reason">
    <button type="button" onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById("courses").appendChild(div);
});

// IMAGE PREVIEW
document.getElementById("imageFile").addEventListener("change", function (e) {
  const file = URL.createObjectURL(e.target.files[0]);
  document.getElementById("current-img").src = file;
});