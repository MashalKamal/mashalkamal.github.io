document.getElementById("generateJSON").addEventListener("click", () => {
    const data = {
        first_name: document.getElementById("firstName").value,
        middle_initial: document.getElementById("middleName").value,
        preferred_name: document.getElementById("nickname").value,
        last_name: document.getElementById("lastName").value,
        divider: document.getElementById("divider").value,
        mascot_adjective: document.getElementById("mascotAdj").value,
        mascot_animal: document.getElementById("mascotAnimal").value,
        personal_statement: document.getElementById("personalStatement").value,
        personal_background: document.getElementById("personalBackground").value,
        academic_background: document.getElementById("academicBackground").value,
        courses: Array.from(document.querySelectorAll("#courses div")).map(div => {
            const inputs = div.querySelectorAll("input");
            return {
                department: inputs[0].value,
                number: inputs[1].value,
                name: inputs[2].value,
                reason: inputs[3].value
            };
        })
    };

    document.getElementById("form").style.display = "none";
    document.getElementById("page-title").innerText = "Introduction JSON";

    document.getElementById("output").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});