(() => {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  };

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const nextTheme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
})();
