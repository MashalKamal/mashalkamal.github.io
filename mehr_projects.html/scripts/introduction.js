document.getElementById("intro-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const about = document.getElementById("about").value;

  document.getElementById("output-area").innerHTML = `
    <h2>${firstName} ${lastName}</h2>
    <p>${about}</p>
  `;
});