document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuPopup = document.getElementById("menu-popup");

    menuButton.addEventListener("click", function () {
        menuPopup.style.display = (menuPopup.style.display === "block") ? "none" : "block";
    });
});
