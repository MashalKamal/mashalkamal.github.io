document.getElementById("generate-json").addEventListener("click", () => {

  const output = document.getElementById("output-area");

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    mascot: mascotAdj.value + " " + mascotAnimal.value,
    quote: quote.value
  };

  output.innerHTML += `
    <h3>Generated JSON Code</h3>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
});