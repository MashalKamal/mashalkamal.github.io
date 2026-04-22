document.getElementById("generate-html").addEventListener("click", function () {

  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;
  const mascotAdj = document.getElementById("mascotAdj").value;
  const mascotAnimal = document.getElementById("mascotAnimal").value;
  const divider = document.getElementById("divider").value;
  const quote = document.getElementById("quote").value;
  const quoteAuthor = document.getElementById("quoteAuthor").value;
  const caption = document.getElementById("imageCaption").value;
  const statement = document.getElementById("personalStatement").value;

  // CHANGE TITLE
  document.getElementById("page-h2").innerText = "Introduction HTML";

  // BUILD HTML OUTPUT (TA STYLE)
  const output = `
<h2>Introduction HTML</h2>

<h3>${first} ${last} ${divider} ${mascotAdj} ${mascotAnimal}</h3>

<figure>
  <img src="${document.getElementById("current-img").src}" width="200">
  <figcaption>${caption}</figcaption>
</figure>

<section>
  <h3>Personal Statement</h3>
  <p>${statement}</p>
</section>

<section>
  <h3>Quote</h3>
  <p>"${quote}" - ${quoteAuthor}</p>
</section>

<section>
  <h3>Courses</h3>
  <ul>
    ${Array.from(document.querySelectorAll("#courses .course")).map(c => {
      const inputs = c.querySelectorAll("input");
      return `<li><strong>${inputs[0].value} ${inputs[1].value}:</strong> ${inputs[2].value} - ${inputs[3].value}</li>`;
    }).join("")}
  </ul>
</section>
`;

  // REPLACE FORM
  document.getElementById("intro-form").style.display = "none";

  document.getElementById("output-area").innerHTML =
    `<pre><code>${output}</code></pre>`;
});