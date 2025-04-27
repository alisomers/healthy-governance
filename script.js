function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    document.querySelectorAll('.content').forEach(function(div) {
      div.style.display = 'none';
    });
    content.style.display = "block";
  }
}
