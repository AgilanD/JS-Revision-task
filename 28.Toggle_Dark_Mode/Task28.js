 const themes = {
    light: "#ffffff",
    dark: "#222222"
  };


  function applyTheme(theme) {
    document.body.style.backgroundColor = themes[theme];
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }

  let currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  document.getElementById("toggleTheme").addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });

  window.addEventListener("storage", (event) => {
    if (event.key === "theme") {
      applyTheme(event.newValue);
    }
  });