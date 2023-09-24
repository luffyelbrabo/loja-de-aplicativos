
function openUrl(url) {
    window.open(url, '_blank');
}

function closeOverlay() {
    document.querySelector('.overlay-tab').style.left = '-50%';
}

// Função para abrir a aba de sobreposição
function openOverlay() {
    document.querySelector('.overlay-tab').style.left = '0';
}

// Chame a função openOverlay() quando desejar abrir a aba (por exemplo, quando o site é carregado)
openOverlay();






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
