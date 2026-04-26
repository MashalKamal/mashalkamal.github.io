document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("intro-form");
  const output = document.getElementById("output-area");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const courses = Array.from(document.querySelectorAll(".course-item"))
      .map(c => {
        const i = c.querySelectorAll("input");
        return `<li>${i[0].value} ${i[1].value} - ${i[2].value}: ${i[3].value}</li>`;
      }).join("");

    const html = `
<main>

<header>
  <h1>${firstName.value} ${lastName.value}</h1>

  <h2>
    <em>
      I understand that what I put here is publicly available on the web and I won’t put anything here I don’t want the public to see.
    </em>
  </h2>
</header>

<h3>${firstName.value} ${lastName.value} | ${mascotAdj.value}-${mascotAnimal.value}</h3>

<figure>
  <img src="${document.getElementById("current-img").src}" width="400" alt="Profile Image">
  <figcaption>${imageCaption.value}</figcaption>
</figure>

<p>${personalStatement.value}</p>

<ul>
  <li><strong>Personal Background:</strong> ${pb.value}</li>
  <li><strong>Professional Background:</strong> ${prof.value}</li>
  <li><strong>Academic Background:</strong> ${acad.value}</li>
  <li><strong>Background in Subject:</strong> ${subj.value}</li>
  <li><strong>Primary Work Computer:</strong> ${pc.value}</li>
  <li><strong>Backup Plan:</strong> ${backup.value}</li>

  <li><strong>Current Courses:</strong>
    <ol>${courses}</ol>
  </li>

  <li><strong>Fun Fact:</strong> I’m scared of cats.</li>
  <li><strong>Extra:</strong> I moved to the USA in 2023.</li>
</ul>

<blockquote>
  “${quote.value}”
</blockquote>

</main>

<br><button onclick="location.reload()">Reset</button>
`;

    form.style.display = "none";
    output.innerHTML = html;
  });

});