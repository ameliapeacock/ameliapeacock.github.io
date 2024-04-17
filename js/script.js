document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function(accordion) {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    header.addEventListener("click", function() {
      // Toggle active class on the accordion
      accordion.classList.toggle("active");

      // Toggle visibility of accordion content
      if (accordion.classList.contains("active")) {
        const contentHeight = content.scrollHeight + parseFloat(window.getComputedStyle(content).paddingTop) + parseFloat(window.getComputedStyle(content).paddingBottom);
        content.style.maxHeight = contentHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});