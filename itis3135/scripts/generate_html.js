document.getElementById("generate-html").addEventListener("click", () => {

  const output = document.getElementById("output-area");

  // build HTML (use your existing html variable if already created)
  const html = `
<h2>Introduction HTML</h2>
<h3>${firstName.value} ${divider.value} ${mascotAdj.value} ${mascotAnimal.value}</h3>

<figure>
  <img src="${document.getElementById("current-img").src}" width="200">
  <figcaption>${imageCaption.value}</figcaption>
</figure>

<p>${personalStatement.value}</p>
`;

  output.innerHTML += `
    <h3>Generated HTML Code</h3>
    <pre><code>${html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
  `;
});