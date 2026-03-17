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
  fetch('/.environment')
  .then((response) => response.text())
  .then((env) => {
    const environment = env.trim();

    if (environment === 'staging') {
      const banner = document.createElement('div');
      banner.textContent = 'STAGING SITE';
      banner.className = 'staging-banner';
      document.body.prepend(banner);
    }
  })
  .catch((error) => {
    console.error('Could not load environment file:', error);
  });
})();
