// Verifique se o usuário já escolheu um tema anteriormente
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Função para alternar entre temas
function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Ouça o evento de clique no botão ou interruptor de alternância
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
