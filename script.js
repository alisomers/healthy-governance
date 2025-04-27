
// script.js

function toggleContent(id) {
  const content = document.getElementById(id);
  if (content) {
    content.classList.toggle('active');
  }
}

