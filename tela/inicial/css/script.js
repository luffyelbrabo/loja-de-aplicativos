document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuOptions = document.getElementById("menu-options");

    menuButton.addEventListener("click", function () {
        if (menuOptions.style.display === "block") {
            menuOptions.style.display = "none";
        } else {
            menuOptions.style.display = "block";
        }
    });
});
