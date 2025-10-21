document.addEventListener("DOMContentLoaded", () => {
    // Эффект плавного появления контента
    const main = document.querySelector("main");
    main.classList.add("fade-in");

    // Тема — светлая/тёмная
    const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });

    // Запоминаем выбор пользователя
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});
