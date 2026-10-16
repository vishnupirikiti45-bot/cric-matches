
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Filter tournament matches
const filterButtons = document.querySelectorAll(".filter-btn");
const matches = document.querySelectorAll(".match-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    // Highlight the selected filter
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    // Show matching fixtures
    matches.forEach((match) => {
      const shouldShow =
        selectedFilter === "all" ||
        match.dataset.type === selectedFilter;

      match.hidden = !shouldShow;
    });
  });
});
