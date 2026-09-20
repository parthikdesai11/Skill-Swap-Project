(function () {
    "use strict";

    const toggleButton = document.getElementById("themeToggle");
    const html = document.documentElement;

    // Get saved theme
    let theme = localStorage.getItem("skillswap-theme");

    // Default = light mode
    if (theme !== "light" && theme !== "dark") {
        theme = "light";
    }

    function setTheme(newTheme) {
        theme = newTheme;

        html.setAttribute("data-theme", theme);

        localStorage.setItem(
            "skillswap-theme",
            theme
        );

        if (toggleButton) {
            if (theme === "dark") {
                toggleButton.textContent = "☀";
                toggleButton.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );
                toggleButton.setAttribute(
                    "title",
                    "Switch to light mode"
                );
            } else {
                toggleButton.textContent = "☾";
                toggleButton.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );
                toggleButton.setAttribute(
                    "title",
                    "Switch to dark mode"
                );
            }
        }
    }

    // Apply initial theme
    setTheme(theme);

    // Button click
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {

            if (theme === "light") {
                setTheme("dark");
            } else {
                setTheme("light");
            }

        });
    }

})();