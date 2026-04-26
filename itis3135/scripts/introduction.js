document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("intro-form");
  const output = document.getElementById("output-area");

  // ----------------------------
  // ADD COURSE
  // ----------------------------
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

  // ----------------------------
  // CLEAR BUTTON
  // ----------------------------
  document.getElementById("clear-btn").addEventListener("click", () => {
    document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  });

  // ----------------------------
  // SUBMIT (SHOW INTRO PAGE)
  // ----------------------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    output.innerHTML = `
      <h2>Introduction</h2>

      <h3>${firstName.value} ${lastName.value} | ${mascotAdj.value}-${mascotAnimal.value}</h3>

      <figure>
        <img src="${document.getElementById("current-img").src}" width="300">
        <figcaption>${imageCaption.value}</figcaption>
      </figure>

      <p>${personalStatement.value}</p>

      <ul>
        <li><strong>Personal:</strong> ${pb.value}</li>
        <li><strong>Professional:</strong> ${prof.value}</li>
        <li><strong>Academic:</strong> ${acad.value}</li>
        <li><strong>Subject:</strong> ${subj.value}</li>
        <li><strong>Computer:</strong> ${pc.value}</li>
        <li><strong>Backup:</strong> ${backup.value}</li>
        <li><strong>Funny:</strong> ${funny.value}</li>
        <li><strong>Share:</strong> ${share.value}</li>
      </ul>

      <blockquote>"${quote.value}"</blockquote>

      <button onclick="location.reload()">Reset</button>
    `;

    form.style.display = "none";
  });

  // ----------------------------
  // GENERATE HTML (FIXED)
  // ----------------------------
  document.getElementById("generate-html").addEventListener("click", () => {

    const html = `
<h2>Introduction HTML</h2>

<h3>${firstName.value} ${lastName.value}</h3>

<figure>
  <img src="${document.getElementById("current-img").src}" width="300">
  <figcaption>${imageCaption.value}</figcaption>
</figure>

<p>${personalStatement.value}</p>

<ul>
  <li>Personal: ${pb.value}</li>
  <li>Professional: ${prof.value}</li>
  <li>Academic: ${acad.value}</li>
  <li>Subject: ${subj.value}</li>
  <li>Computer: ${pc.value}</li>
  <li>Backup: ${backup.value}</li>
</ul>

<blockquote>${quote.value}</blockquote>
`;

    output.innerHTML = `
      <h3>Generated HTML</h3>
      <pre><code>${html.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
    `;
  });

  // ----------------------------
  // GENERATE JSON (FIXED)
  // ----------------------------
  document.getElementById("generate-json").addEventListener("click", () => {

    const courses = Array.from(document.querySelectorAll(".course-item")).map(c => {
      const i = c.querySelectorAll("input");
      return {
        department: i[0].value,
        number: i[1].value,
        name: i[2].value,
        reason: i[3].value
      };
    });

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      preferred_name: preferred.value,
      middle_initial: middle.value,
      divider: divider.value,
      mascot_adjective: mascotAdj.value,
      mascot_animal: mascotAnimal.value,
      image: document.getElementById("current-img").src,
      image_caption: imageCaption.value,
      personal_statement: personalStatement.value,
      personal_background: pb.value,
      professional_background: prof.value,
      academic_background: acad.value,
      subject_background: subj.value,
      primary_computer: pc.value,
      backup: backup.value,
      funny: funny.value,
      share: share.value,
      quote: quote.value,
      quote_author: quoteAuthor.value,
      courses: courses,
      links: [
        link1.value,
        link2.value,
        link3.value,
        link4.value,
        link5.value
      ]
    };

    output.innerHTML = `
      <h3>Generated JSON</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  });

});