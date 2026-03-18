document.getElementById("generateHTML").addEventListener("click", () => {
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;

    document.getElementById("form").style.display = "none";
    document.getElementById("page-title").innerText = "Introduction HTML";

    document.getElementById("output").innerHTML = `
<pre><code>
&lt;h2&gt;Introduction HTML&lt;/h2&gt;
&lt;h3&gt;${first} ${last}&lt;/h3&gt;
&lt;!-- Add more structured HTML here as in your intro page --&gt;
</code></pre>
    `;
});