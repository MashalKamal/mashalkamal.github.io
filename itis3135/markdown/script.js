function convertMarkdown() {
  let text = document.getElementById("markdown-input").value;

  // HEADINGS
  text = text.replace(/^### (.*$)/gm, "<h3>$1</h3>");
  text = text.replace(/^## (.*$)/gm, "<h2>$1</h2>");
  text = text.replace(/^# (.*$)/gm, "<h1>$1</h1>");

  // BOLD (**text** or __text__)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // ITALIC (*text* or _text_)
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.*?)_/g, "<em>$1</em>");

  // IMAGES
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // LINKS
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // QUOTES
  text = text.replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>");

  return text;
}