document.getElementById("language-switcher").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-es]");

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});
