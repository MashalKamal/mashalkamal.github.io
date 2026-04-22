document.getElementById("generate-json").addEventListener("click", function () {

  const courses = Array.from(document.querySelectorAll("#courses .course")).map(c => {
    const inputs = c.querySelectorAll("input");
    return {
      department: inputs[0].value,
      number: inputs[1].value,
      name: inputs[2].value,
      reason: inputs[3].value
    };
  });

  const links = Array.from(document.querySelectorAll("#links input")).map((l, i) => {
    return {
      name: `Link ${i + 1}`,
      href: l.value
    };
  });

  const data = {
    first_name: document.getElementById("firstName").value,
    middle_name: document.getElementById("middleName").value,
    nickname: document.getElementById("nickname").value,
    last_name: document.getElementById("lastName").value,

    mascot_adjective: document.getElementById("mascotAdj").value,
    mascot_animal: document.getElementById("mascotAnimal").value,
    divider: document.getElementById("divider").value,

    image: document.getElementById("current-img").src,
    image_caption: document.getElementById("imageCaption").value,

    personal_statement: document.getElementById("personalStatement").value,

    quote: document.getElementById("quote").value,
    quote_author: document.getElementById("quoteAuthor").value,

    funny_thing: document.getElementById("funnyThing").value,
    share_something: document.getElementById("shareSomething").value,

    courses: courses,
    links: links
  };

  document.getElementById("page-h2").innerText = "Introduction JSON";

  document.getElementById("intro-form").style.display = "none";

  document.getElementById("output-area").innerHTML =
    `<pre><code>${JSON.stringify(data, null, 2)}</code></pre>`;
});