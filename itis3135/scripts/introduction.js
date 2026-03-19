const form = document.getElementById("intro-form");
const output = document.getElementById("output-area");

// PREVENT REFRESH
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted! Scroll down to generate HTML or JSON.");
});

// CLEAR BUTTON
document.getElementById("clear-btn").addEventListener("click", () => {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
});

// IMAGE PREVIEW
document.getElementById("imageFile").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("current-img").src = URL.createObjectURL(file);
  }
});

// ADD COURSE
document.getElementById("add-course").addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("course-item");

  div.innerHTML = `
    <input placeholder="Dept">
    <input placeholder="Number">
    <input placeholder="Name">
    <input placeholder="Reason">
    <button type="button" class="delete">X</button>
  `;

  document.getElementById("courses").appendChild(div);
});

// DELETE COURSE
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// GENERATE HTML OUTPUT
document.getElementById("generate-html").addEventListener("click", () => {

  const bullets = Array.from(document.querySelectorAll("#bullets input"))
    .map(b => `<li>${b.value}</li>`).join("");

  const courses = Array.from(document.querySelectorAll(".course-item"))
    .map(c => {
      const i = c.querySelectorAll("input");
      return `<li>${i[0].value} ${i[1].value} - ${i[2].value}: ${i[3].value}</li>`;
    }).join("");

  const html = `
<h2>Introduction HTML</h2>

<h3>${firstName.value} ${divider.value} ${mascotAdj.value} ${mascotAnimal.value}</h3>

<figure>
  <img src="${document.getElementById("current-img").src}" width="200">
  <figcaption>${imageCaption.value}</figcaption>
</figure>

<p>${personalStatement.value}</p>

<ul>${bullets}</ul>

<h3>Courses</h3>
<ul>${courses}</ul>

<blockquote>"${quote.value}" - ${quoteAuthor.value}</blockquote>
`;

  output.innerHTML += `
    <h3>Generated HTML Code</h3>
    <pre><code>${html.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
  `;
});

// GENERATE JSON OUTPUT
document.getElementById("generate-json").addEventListener("click", () => {

  const bullets = Array.from(document.querySelectorAll("#bullets input"))
    .map(b => b.value);

  const courses = Array.from(document.querySelectorAll(".course-item"))
    .map(c => {
      const i = c.querySelectorAll("input");
      return {
        dept: i[0].value,
        num: i[1].value,
        name: i[2].value,
        reason: i[3].value
      };
    });

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    mascot: mascotAdj.value + " " + mascotAnimal.value,
    bullets: bullets,
    courses: courses,
    quote: quote.value,
    author: quoteAuthor.value
  };

  output.innerHTML += `
    <h3>Generated JSON Code</h3>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
});