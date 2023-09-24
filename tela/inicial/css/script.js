document.addEventListener("DOMContentLoaded", function() {
    const openMenuButton = document.getElementById("openMenu");
    const closeMenuButton = document.getElementById("closeMenu");
    const popupMenu = document.getElementById("popupMenu");

    openMenuButton.addEventListener("click", function() {
        popupMenu.style.display = "block";
    });

    closeMenuButton.addEventListener("click", function() {
        popupMenu.style.display = "none";
    });
});
