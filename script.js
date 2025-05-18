document.addEventListener('DOMContentLoaded', function() {
  const text = "Hack Club";
  const textEl = document.getElementById("hackclub-type");
  const box = document.getElementById("hackclub-box");
  const header = document.querySelector("header");
  let idx = 0;

  function typeIt() {
    if(idx < text.length) {
      textEl.textContent += text[idx++];
      setTimeout(typeIt, 120);
    } else {
      setTimeout(() => {
        textEl.style.opacity = 0; // fade text
        setTimeout(() => {
          box.style.opacity = 0; // fade box
          if(header) header.classList.add("hc-reveal"); // fade in header
          setTimeout(() => {
            box.style.display = "none";
          }, 1000);
        }, 800);
      }, 1000);
    }
  }
  typeIt();
});
