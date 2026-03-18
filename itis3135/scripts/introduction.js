// Prevent form default refresh
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    generateIntro();
});

// Clear all input fields
document.getElementById("clearBtn").addEventListener("click", () => {
    document.querySelectorAll("input, textarea").forEach(el => el.value = "");
});

// Add course dynamically
document.getElementById("addCourse").addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = `
        <input placeholder="Department">
        <input placeholder="Number">
        <input placeholder="Course Name">
        <input placeholder="Reason">
        <button type="button">Delete</button>
    `;
    div.querySelector("button").onclick = () => div.remove();
    document.getElementById("courses").appendChild(div);
});

// Generate Introduction Page
function generateIntro() {
    const first = document.getElementById("firstName").value;
    const middle = document.getElementById("middleName").value;
    const nick = document.getElementById("nickname").value;
    const last = document.getElementById("lastName").value;

    const adj = document.getElementById("mascotAdj").value;
    const animal = document.getElementById("mascotAnimal").value;

    const divider = document.getElementById("divider").value;

    const personal = document.getElementById("personalStatement").value;
    const personalBg = document.getElementById("personalBackground").value;
    const academicBg = document.getElementById("academicBackground").value;

    const caption = document.getElementById("imageCaption").value;

    // IMAGE
    const file = document.getElementById("imageInput").files[0];
    let imageURL = "images/default.jpg";
    if (file) imageURL = URL.createObjectURL(file);

    // COURSES
    let coursesHTML = "";
    document.querySelectorAll("#courses div").forEach(div => {
        const inputs = div.querySelectorAll("input");
        coursesHTML += `
            <li><strong>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value}:</strong> ${inputs[3].value}</li>
        `;
    });

    // HIDE FORM
    document.getElementById("form").style.display = "none";

    // OUTPUT
    document.getElementById("output").innerHTML = `
        <h3>${first} ${middle} "${nick}" ${last} ${divider} ${adj} ${animal}</h3>

        <figure>
            <img src="${imageURL}" width="200">
            <figcaption>${caption}</figcaption>
        </figure>

        <ul>
            <li><strong>Personal Statement:</strong> ${personal}</li>
            <li><strong>Personal Background:</strong> ${personalBg}</li>
            <li><strong>Academic Background:</strong> ${academicBg}</li>
            <li><strong>Courses:</strong>
                <ul>${coursesHTML}</ul>
            </li>
            <li><strong>Fun Fact:</strong> I like dogs but I am scared of cats.</li>
        </ul>

        <p><a href="#" onclick="location.reload()">Reset</a></p>
    `;
}